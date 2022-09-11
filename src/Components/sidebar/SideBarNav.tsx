import React from "react";
import { SIDEBAR_IMAGES } from "../../Constants/constants";
// import { Link } from "react-router-dom";

import {
  StyledContainer,
  StyledDesciption,
  // StyledList,
  // StyledListItem,
  StyledSideBarItem,
  StyledSocial,
  StyledTitle,
} from "./Sidebar.styled";

const getRandomIndex = (arrLength: number) => {
  return Math.floor(Math.random() * arrLength);
};

const SidebarNav: React.FC = () => {
  const randomImage = SIDEBAR_IMAGES[getRandomIndex(SIDEBAR_IMAGES.length)];

  return (
    <StyledContainer>
      <StyledSideBarItem>
        <StyledTitle>ABOUT ME</StyledTitle>
        <img src={randomImage} alt="quote" />
        <StyledDesciption>
          I'm a MERN stack developer, currently exploring some new Tech Stack,
          For example, GraphQL, Typescript, Relay etc.
          <p>
            {" "}
            This App is made using React, NodeJS, GraphQL and MongoDB. Both,
            Frontend and Backend code is written in Typescript
          </p>
        </StyledDesciption>
      </StyledSideBarItem>

      {/* <StyledSideBarItem>
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
      </StyledSideBarItem> */}

      <StyledSideBarItem>
        <StyledTitle>FOLLOW ME</StyledTitle>
        <StyledSocial>
          <a
            href="https://www.instagram.com/zai3m/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="sidebarIcon fab fa-instagram-square"></i>
          </a>

          <a
            href="https://github.com/zaiem2001"
            target="_blank"
            rel="noreferrer"
          >
            <i className="sidebarIcon fab fa-github-square"></i>
          </a>

          <a
            href="https://twitter.com/zaiem2001"
            target="_blank"
            rel="noreferrer"
          >
            <i className="sidebarIcon fab fa-twitter-square"></i>
          </a>
        </StyledSocial>
      </StyledSideBarItem>
    </StyledContainer>
  );
};

export default SidebarNav;
