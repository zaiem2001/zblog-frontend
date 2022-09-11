import { DeleteOutlined } from "@ant-design/icons";
import { Button } from "antd";
import styled from "styled-components";
import { MobileProps } from "../../Constants/Interfaces";

export const StyledContainer = styled.div`
  padding-top: 50px;
`;

export const StyledFormContainer = styled.form`
  position: relative;
`;

export const StyledImageContainer = styled.div<MobileProps>`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;

  ${({ ismobile }) =>
    ismobile &&
    `
    height: 150px;
  `}
`;

export const StyledBlogImage = styled.div`
  width: 60%;

  img {
    width: 100%;
  }
`;

export const StyledDeleteOutlined = styled(DeleteOutlined)<MobileProps>`
  font-size: ${({ ismobile }) => (ismobile ? "30px" : "44px")};

  svg {
    fill: red;
  }
`;

export const StyledNoImage = styled.div<MobileProps>`
  margin-left: ${({ ismobile }) => !ismobile && "150px"};
  margin: ${({ ismobile }) => ismobile && " 20px auto"};
  width: 70vw;
  border-radius: 10px;
  object-fit: cover;
  border: 1px dashed ${(props) => (props.theme.isActive ? "#eee" : "#000")};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  height: 250px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${(props) => (props.theme.isActive ? "#fff" : "#000")};
  }

  i {
    width: 25px;
    height: 25px;
    font-size: 20px;
    border: 1px solid ${(props) => props.theme.color};
    border-radius: 50%;
    color: rgb(129, 125, 125);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`;

export const StyledSubmitButton = styled.div<MobileProps>`
  position: absolute;
  top: 20px;
  right: 50px;
  padding: 10px;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;

  ${({ ismobile }) =>
    ismobile &&
    `
  top: -3%;
  left: 13%;
  `}
`;

export const StyledButton = styled(Button)`
  background-color: ${(props) => !props.theme.isActive && "black"} !important;
`;

export const StyledMarkdown = styled.div`
  padding: 10px 30px;
  background-color: #000;
  flex: 1;
  font-size: 20px;
  word-break: break-all;

  > * {
    color: #eee;
  }

  img {
    width: 200px;
    height: 200px;
    object-fit: cover;
  }
`;

export const StyledMarkdownContainer = styled.div<MobileProps>`
  margin-top: 10px;
  display: flex;
  min-height: 100vh;

  ${({ ismobile }) => ismobile && "flex-direction: column"};
`;

export const StyledMarkdownHeader = styled.div`
  background-color: wheat;
  text-align: center;
  padding: 6px 0;

  h3 {
    font-weight: bold;
    font-size: 20px;
  }

  p {
    font-size: 17px;
  }
`;

export const StyledTextArea = styled.textarea`
  flex: 1;
  padding: 10px 20px;
  font-family: inherit;
  font-size: 20px;
  outline: none;
  min-height: 100vh;
`;
