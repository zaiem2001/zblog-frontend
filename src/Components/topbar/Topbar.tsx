import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Switch } from "antd";
import { LinkedinOutlined } from "@ant-design/icons";

import {
  StlyedTopUl,
  StyledContainer,
  StyledHamBurger,
  StyledHamBurgerWrapper,
  StyledLeftWrapper,
  StyledLink,
  StyledMobileContainer,
  StyledRightWrapper,
  StyledThemeContainer,
  StyledTopCenter,
  StyledTopListItem,
} from "./Topbar.styled";
import { User } from "../../Constants/Interfaces";
import useIsMobile from "../../Hooks/UseIsMobile";

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
  const isMobile = useIsMobile();

  const [isActive, setIsActive] = useState(false);

  const resetActiveState = () => {
    setIsActive(false);
  };

  return (
    <>
      {isMobile && (
        <StyledMobileContainer>
          <StyledHamBurgerWrapper onClick={() => setIsActive((prev) => !prev)}>
            <StyledHamBurger isActive={isActive}></StyledHamBurger>
          </StyledHamBurgerWrapper>

          <StyledLink className="link" to="/settings">
            <img
              src={
                user?.profilePicture
                  ? user?.profilePicture
                  : "/assets/noAvatar.png"
              }
              alt={isLoggedIn ? user?.username : "userProfile"}
            />
          </StyledLink>
        </StyledMobileContainer>
      )}

      <StyledContainer ismobile={isMobile} isActive={isActive}>
        <StyledLeftWrapper ismobile={isMobile}>
          <a
            href="https://www.linkedin.com/in/zaiem-munshi-b84a3321b/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedinOutlined />{" "}
          </a>
          <a
            href="https://github.com/zaiem2001"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github-square"></i>
          </a>
        </StyledLeftWrapper>

        <StyledTopCenter ismobile={isMobile}>
          <StlyedTopUl>
            <StyledTopListItem>
              <Link className="link" to="/" onClick={resetActiveState}>
                HOME
              </Link>
            </StyledTopListItem>

            <StyledTopListItem>
              <Link className="link" to="/write" onClick={resetActiveState}>
                WRITE
              </Link>
            </StyledTopListItem>

            {isMobile && (
              <StyledTopListItem>
                <Link className="link" to="/about" onClick={resetActiveState}>
                  About
                </Link>
              </StyledTopListItem>
            )}
            {isLoggedIn ? (
              <StyledTopListItem
                onClick={() => {
                  resetActiveState();
                  logout();
                }}
              >
                LOGOUT
              </StyledTopListItem>
            ) : (
              <StyledTopListItem>
                <Link className="link" to="/login" onClick={resetActiveState}>
                  LOGIN
                </Link>
              </StyledTopListItem>
            )}
          </StlyedTopUl>
        </StyledTopCenter>

        <StyledRightWrapper ismobile={isMobile}>
          {!isMobile && (
            <StyledLink className="link" to="/settings">
              <img
                src={
                  user?.profilePicture
                    ? user?.profilePicture
                    : "/assets/noAvatar.png"
                }
                alt={isLoggedIn ? user?.username : "userProfile"}
              />
            </StyledLink>
          )}
          {!isMobile && <i className="fas fa-search"></i>}

          <StyledThemeContainer>
            <Switch
              onChange={onThemeToggle}
              defaultChecked={isDarkMode}
              onClick={resetActiveState}
            />
            <img
              src={isDarkMode ? "/assets/moon.svg" : "/assets/sun.svg"}
              alt="ThemeImage"
            />
            <span> Toggle Dark Mode</span>
          </StyledThemeContainer>
        </StyledRightWrapper>
      </StyledContainer>
    </>
  );
};

export default Topbar;
