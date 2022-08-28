import React from "react";
import { Link } from "react-router-dom";

import {
  StyledContainer,
  StyledList,
  StyledListItem,
  StyledSideBarItem,
  StyledSocial,
  StyledTitle,
} from "./Sidebar.styled";

const SidebarNav: React.FC = () => {
  return (
    <StyledContainer>
      <StyledSideBarItem>
        <StyledTitle>ABOUT ME</StyledTitle>
        <img src="https://w.wallhaven.cc/full/kw/wallhaven-kwov61.png" alt="" />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </StyledSideBarItem>

      <StyledSideBarItem>
        <StyledTitle>CATEGORIES</StyledTitle>
        <StyledList>
          <StyledListItem>
            <Link className="link" to="/posts?cat=Life">
              Life
            </Link>
          </StyledListItem>
          <StyledListItem>
            <Link className="link" to="/posts?cat=Music">
              Music
            </Link>
          </StyledListItem>
          <StyledListItem>
            <Link className="link" to="/posts?cat=Sport">
              Sport
            </Link>
          </StyledListItem>
          <StyledListItem>
            <Link className="link" to="/posts?cat=Style">
              Style
            </Link>
          </StyledListItem>
          <StyledListItem>
            <Link className="link" to="/posts?cat=Tech">
              Tech
            </Link>
          </StyledListItem>
          <StyledListItem>
            <Link className="link" to="/posts?cat=Cinema">
              Cinema
            </Link>
          </StyledListItem>
        </StyledList>
      </StyledSideBarItem>

      <StyledSideBarItem>
        <StyledTitle>FOLLOW US</StyledTitle>
        <StyledSocial>
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </StyledSocial>
      </StyledSideBarItem>
    </StyledContainer>
  );
};

export default SidebarNav;
