import React from "react";
import { Link } from "react-router-dom";
import { Switch } from "antd";
import { LinkedinOutlined } from "@ant-design/icons";

import {
  StlyedTopUl,
  StyledContainer,
  StyledLeftWrapper,
  StyledRightWrapper,
  StyledThemeContainer,
  StyledTopCenter,
  StyledTopListItem,
} from "./Topbar.styled";
import { User } from "../../Constants/Interfaces";
import "./topbar.css";

interface Props {
  logout: () => any;
  isLoggedIn: boolean;
  user: User;
  onThemeToggle: (checked: boolean) => void;
  isDarkMode: boolean;
}

const Topbar: React.FC<Props> = ({
  logout,
  isLoggedIn,
  user,
  onThemeToggle,
  isDarkMode,
}) => {
  return (
    <StyledContainer>
      <StyledLeftWrapper>
        <a
          href="https://www.linkedin.com/in/zaiem-munshi-b84a3321b/"
          target="_blank"
          rel="noreferrer"
          className="topIcon"
        >
          <LinkedinOutlined />{" "}
        </a>
        <a href="https://github.com/zaiem2001" target="_blank" rel="noreferrer">
          <i className="topIcon fab fa-github-square"></i>
        </a>
      </StyledLeftWrapper>

      <StyledTopCenter>
        <StlyedTopUl>
          <StyledTopListItem>
            <Link className="link" to="/">
              HOME
            </Link>
          </StyledTopListItem>

          <StyledTopListItem>
            <Link className="link" to="/write">
              WRITE
            </Link>
          </StyledTopListItem>
          {isLoggedIn ? (
            <StyledTopListItem onClick={logout}>LOGOUT</StyledTopListItem>
          ) : (
            <Link className="link" to="/login">
              <StyledTopListItem>LOGIN</StyledTopListItem>
            </Link>
          )}
        </StlyedTopUl>
      </StyledTopCenter>

      <StyledRightWrapper>
        <Link className="link" to="/settings">
          <img
            className="topImg"
            src={
              user?.profilePicture
                ? user?.profilePicture
                : "/assets/noAvatar.png"
            }
            alt={isLoggedIn ? user?.username : "userProfile"}
          />
        </Link>
        <i className="topSearchIcon fas fa-search"></i>

        <StyledThemeContainer>
          <Switch onChange={onThemeToggle} defaultChecked={isDarkMode} />
          <img
            src={isDarkMode ? "/assets/moon.svg" : "/assets/sun.svg"}
            alt="ThemeImage"
          />
          <span> Toggle Dark Mode</span>
        </StyledThemeContainer>
      </StyledRightWrapper>
    </StyledContainer>
  );
};

export default Topbar;
