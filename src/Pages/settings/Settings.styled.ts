import styled from "styled-components";
import { MobileProps } from "../../Constants/Interfaces";

export const StyledContainer = styled.div`
  display: flex;
`;

export const StyledWrapper = styled.div<MobileProps>`
  box-sizing: border-box;
  flex: 9;
  padding: ${({ ismobile }) => (ismobile ? "10px" : "20px")};
`;

export const StyledTitle = styled.div<MobileProps>`
  display: ${({ ismobile }) => !ismobile && "flex"};
  align-items: center;
  justify-content: space-between;

  span:first-child {
    font-size: 30px;
    margin-bottom: 20px;
    color: lightcoral;

    ${({ ismobile }) =>
      ismobile &&
      `
      display: block;
      font-size: 20px;
      width: 100%;
      text-align: center;
    `}
  }

  span:nth-child(2) {
    color: ${(props) => props.theme.color};

    ${({ ismobile }) =>
      ismobile &&
      `
      margin-right: 50px;
    `}
  }

  span:last-child {
    color: red;
    font-size: 14px;
    cursor: pointer;
    font-weight: ${(props) => (props.theme.isActive ? 200 : "bold")};
  }
`;

export const StyledFormContainer = styled.form`
  display: flex;
  flex-direction: column;

  > label {
    font-size: 20px;
    margin-top: 20px;
    color: ${(props) => props.theme.color};
  }

  > input {
    font-size: 20px;
    color: black;
    margin-top: 10px;
    margin-bottom: 10px;
    border: none;
    border-bottom: 1px solid lightgray;
    padding: 10px;
    outline: none;
  }

  i {
    width: 25px;
    height: 25px;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 50%;
    margin-left: 10px;
    color: white;
    background-color: lightcoral;
    cursor: pointer;
  }
`;

export const StyledUserBlogsContainer = styled.div`
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledUserBlogsTitle = styled.div`
  width: 100%;
  text-align: center;
  font-size: 30px;
  margin-top: 15px;
  padding: 10px 0;

  border-top: 1px solid ${(props) => props.theme.titleColor};
  border-bottom: 1px solid ${(props) => props.theme.titleColor};

  h2 {
    margin: 0;
    color: lightcoral;
  }
`;
