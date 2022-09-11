import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../Context/AuthContext";
import UseDocumentTitle from "../../Hooks/UseDocumentTitle";
import useIsMobile from "../../Hooks/UseIsMobile";

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
  const isMobile = useIsMobile();

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
          ismobile={isMobile}
          type="email"
          placeholder="Enter your email..."
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Password</label>
        <StyledInput
          ismobile={isMobile}
          type="password"
          placeholder="Enter your password..."
          onChange={(e) => setPassword(e.target.value)}
          required
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
