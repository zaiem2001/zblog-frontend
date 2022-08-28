import React from "react";
import Spinner from "../Spinner/Spinner";

import { StyledContainer } from "./Fallback.styled";

const FallbackLoader = () => {
  return (
    <StyledContainer>
      <Spinner loading />
    </StyledContainer>
  );
};

export default FallbackLoader;
