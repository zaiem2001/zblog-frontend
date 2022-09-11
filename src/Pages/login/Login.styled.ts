import { Button } from "antd";
import styled from "styled-components";
import { MobileProps } from "../../Constants/Interfaces";

export const StyledContainer = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/768473/pexels-photo-768473.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500");
  background-size: cover;

  .loginTitle {
    font-size: 50px;
  }
`;

export const StyledFormContainer = styled.form`
  margin-top: 20px;
  width: 100vw;
  display: flex;
  align-items: center;
  padding: 10px;
  flex-direction: column;

  > label {
    font-size: 20px;
    margin: 10px 0;
    font-weight: bold;
  }
`;

export const StyledInput = styled.input<MobileProps>`
  padding: 10px;
  background-color: white;
  border: none;
  width: ${({ ismobile }) => (ismobile ? "100%" : "50%")};
  font-size: 20px;
  font-family: inherit;

  :focus {
    outline: none;
  }
`;

export const StyledButton = styled(Button)`
  margin-top: 20px;
  cursor: pointer;
  color: white;
  border: none;
  border-radius: 10px;
  text-align: center;
  width: 20%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledRegisterButton = styled.button`
  position: absolute;
  top: 60px;
  right: 20px;
  background-color: teal;
  cursor: pointer;
  padding: 10px;
  border: none;
  color: white;
  font-weight: bold;
  font-family: inherit;
  width: 10%;
`;
