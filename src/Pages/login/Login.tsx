import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../Context/AuthContext";
import UseDocumentTitle from "../../Hooks/UseDocumentTitle";

import {
  StyledButton,
  StyledContainer,
  StyledFormContainer,
  StyledInput,
  StyledRegisterButton,
} from "./Login.styled";

const Login: React.FC = () => {
  const { login, isLoading } = useContext(UserContext);

  UseDocumentTitle("Z Blog - Login Page");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <StyledContainer>
      <span className="loginTitle">Login</span>

      <StyledFormContainer onSubmit={handleLogin}>
        <label>Email</label>
        <StyledInput
          type="email"
          placeholder="Enter your email..."
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password</label>
        <StyledInput
          type="password"
          placeholder="Enter your password..."
          onChange={(e) => setPassword(e.target.value)}
        />

        <StyledButton type="primary" loading={isLoading} htmlType="submit">
          Login
        </StyledButton>
      </StyledFormContainer>

      <Link to="/register">
        <StyledRegisterButton>Register</StyledRegisterButton>
      </Link>
    </StyledContainer>
  );
};

export default Login;
