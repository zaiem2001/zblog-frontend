import React from "react";

import { StyledError } from "./Error.styled";

type ErrorProps = {
  message: string | undefined;
};

const ErrorMessage: React.FC<ErrorProps> = ({ message }) => {
  return (
    <StyledError className="errorMessage">
      {message || "Something went Wrong."}
    </StyledError>
  );
};

export default ErrorMessage;
