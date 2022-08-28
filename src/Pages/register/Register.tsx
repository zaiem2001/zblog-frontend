import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "react-relay";
import { Link, useNavigate } from "react-router-dom";

import { registerMutation } from "../../Queries/User/Auth";

import UseDocumentTitle from "../../Hooks/UseDocumentTitle";
import ErrorMessage from "../../Components/ErrorMessage/ErrorMessage";
import Message from "../../Components/Message/Message";
import {
  StyledButton,
  StyledContainer,
  StyledFormContainer,
  StyledInput,
  StyledLoginButton,
} from "./Register.styled";
import { SignupSchema } from "../../Utils/Validations";

type FormValues = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const Register: React.FC = () => {
  UseDocumentTitle("Z Blog - Register Page");
  const navigate = useNavigate();

  const [commit, isLoading] = useMutation(registerMutation);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(SignupSchema),
  });

  const onSubmit = handleSubmit((data) => {
    const { username, email, password } = data;

    commit({
      variables: {
        input: {
          username,
          email,
          password,
        },
      },
      onCompleted(_data, error) {
        if (error?.length) {
          Message({ text: error[0]?.message, type: "error" });
        } else {
          Message({ text: "Registered Successfully", type: "success" });
          navigate("/login");
        }
      },
    });
  });

  return (
    <StyledContainer>
      <span>Register</span>

      <StyledFormContainer onSubmit={onSubmit}>
        <label>Username</label>
        <StyledInput
          className={errors.username ? "errorInput" : ""}
          placeholder="Enter your Username"
          {...register("username")}
        />
        {errors.username && (
          <ErrorMessage message={errors!.username!.message} />
        )}

        <label>Email</label>
        <StyledInput
          className={errors.email ? "errorInput" : ""}
          placeholder="Enter your Email"
          type="email"
          {...register("email")}
        />
        {errors.email && <ErrorMessage message={errors!.email!.message} />}

        <label>Password</label>
        <StyledInput
          className={errors.password ? "errorInput" : ""}
          placeholder="input password"
          {...register("password")}
          type="password"
        />
        {errors.password && (
          <ErrorMessage message={errors!.password!.message} />
        )}

        <label>Confirm Password</label>
        <StyledInput
          className={errors.confirmPassword ? "errorInput" : ""}
          placeholder="Confirm Password"
          {...register("confirmPassword")}
          type="password"
        />
        {errors.confirmPassword && (
          <ErrorMessage message={errors!.confirmPassword!.message} />
        )}

        <StyledButton type="submit" disabled={isLoading}>
          Register
        </StyledButton>
      </StyledFormContainer>

      <Link to="/login">
        <StyledLoginButton className="registerLoginButton">
          Login
        </StyledLoginButton>
      </Link>
    </StyledContainer>
  );
};

export default Register;
