import styled from "styled-components";

export const StyledContainer = styled.div`
  height: calc(100vh - 50px);
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/317355/pexels-photo-317355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  background-size: cover;

  span {
    text-align: center;
    font-size: 50px;
  }
`;

export const StyledFormContainer = styled.form`
  width: 500px;
  padding: 10px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;

  > label {
    font-weight: bold;
    margin: 10px 0;
  }
`;

interface InputProps {
  error?: boolean;
}

export const StyledInput = styled.input<InputProps>`
  padding: 10px;
  background-color: white;
  border: none;

  &.errorInput {
    border: 1px solid crimson;
  }

  :focus {
    outline: none;
  }
`;

export const StyledButton = styled.button`
  margin-top: 20px;
  cursor: pointer;
  background-color: teal;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 10px;
  text-align: center;
`;

export const StyledLoginButton = styled.button`
  position: absolute;
  top: 60px;
  right: 20px;
  background-color: lightcoral;
  cursor: pointer;
  padding: 10px;
  border: none;
  color: white;
  border-radius: 10px;
`;
