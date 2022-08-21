import React from "react";

import "./error.css";

type ErrorProps = {
  message: string | undefined;
};

const ErrorMessage: React.FC<ErrorProps> = ({ message }) => {
  return <p className="errorMessage">{message || "Something went Wrong."}</p>;
};

export default ErrorMessage;
