import { Button } from "antd";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../Context/AuthContext";
import UseDocumentTitle from "../../Hooks/UseDocumentTitle";

import "./login.css";

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
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleLogin}>
        <label>Email</label>
        <input
          className="loginInput"
          type="email"
          placeholder="Enter your email..."
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password</label>
        <input
          className="loginInput"
          type="password"
          placeholder="Enter your password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          className="loginButton"
          type="primary"
          loading={isLoading}
          htmlType="submit"
        >
          Login
        </Button>
      </form>

      <Link to="/register">
        <button className="loginRegisterButton">Register</button>
      </Link>
    </div>
  );
};

export default Login;
