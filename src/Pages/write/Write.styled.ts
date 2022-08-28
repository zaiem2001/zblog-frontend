import { DeleteOutlined } from "@ant-design/icons";
import { Button } from "antd";
import styled from "styled-components";

export const StyledContainer = styled.div`
  padding-top: 50px;
`;

export const StyledFormContainer = styled.form`
  position: relative;
`;

export const StyledImageContainer = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
`;

export const StyledBlogImage = styled.div`
  width: 60%;

  img {
    width: 100%;
  }
`;

export const StyledDeleteOutlined = styled(DeleteOutlined)`
  font-size: 44px;

  svg {
    fill: red;
  }
`;

export const StyledNoImage = styled.div`
  margin-left: 150px;
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
`;

export const StyledSubmitButton = styled.div`
  position: absolute;
  top: 20px;
  right: 50px;
  padding: 10px;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
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

export const StyledMarkdownContainer = styled.div`
  margin-top: 10px;
  padding: 0 20px;
  display: flex;
  min-height: 100vh;
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
