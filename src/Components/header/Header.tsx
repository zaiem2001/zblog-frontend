import React from "react";

import {
  StyledContainer,
  StyledHeaderTitles,
  StyledImgBox,
} from "./Header.styled";

const Header = () => {
  return (
    <StyledContainer>
      <StyledHeaderTitles>
        <span>Z</span>
        <span>BLOG</span>
      </StyledHeaderTitles>

      <StyledImgBox>
        <img src="/assets/car.jpg" alt="" />
      </StyledImgBox>
    </StyledContainer>
  );
};

export default Header;
