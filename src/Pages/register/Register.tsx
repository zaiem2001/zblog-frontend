import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";

import UseDocumentTitle from "../../Hooks/UseDocumentTitle";
import { SignupSchema } from "../../Utils/Validations";
import "./register.css";
import ErrorMessage from "../../Components/ErrorMessage/ErrorMessage";
import { useMutation } from "react-relay";
import { registerMutation } from "../../Queries/User/Auth";
import Message from "../../Components/Message/Message";

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
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={onSubmit}>
        <label>Username</label>
        <input
          className={
            errors.username ? "registerInput errorInput" : "registerInput"
          }
          placeholder="Enter your Username"
          {...register("username")}
        />
        {errors.username && (
          <ErrorMessage message={errors!.username!.message} />
        )}

        <label>Email</label>
        <input
          className={
            errors.email ? "registerInput errorInput" : "registerInput"
          }
          placeholder="Enter your Email"
          type="email"
          {...register("email")}
        />
        {errors.email && <ErrorMessage message={errors!.email!.message} />}

        <label>Password</label>
        <input
          className={
            errors.password ? "registerInput errorInput" : "registerInput"
          }
          placeholder="input password"
          {...register("password")}
          type="password"
        />
        {errors.password && (
          <ErrorMessage message={errors!.password!.message} />
        )}

        <label>Confirm Password</label>
        <input
          className={
            errors.confirmPassword
              ? "registerInput errorInput"
              : "registerInput"
          }
          placeholder="Confirm Password"
          {...register("confirmPassword")}
          type="password"
        />
        {errors.confirmPassword && (
          <ErrorMessage message={errors!.confirmPassword!.message} />
        )}

        <button className="registerButton" type="submit" disabled={isLoading}>
          Register
        </button>
      </form>

      <Link to="/login">
        <button className="registerLoginButton">Login</button>
      </Link>
    </div>
  );
};

export default Register;
