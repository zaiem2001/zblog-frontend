import styled from "styled-components";
import { MobileProps } from "../../Constants/Interfaces";

export const StyledContainer = styled.div`
  flex: 9;
`;

export const StyledWrapper = styled.div<MobileProps>`
  padding: ${({ ismobile }) => (ismobile ? "10px 0" : "20px")};
  padding-right: 0;

  img {
    width: 100%;
    height: 300px;
    border-radius: 5px;
    object-fit: contain;
  }
`;

export const StyledTitle = styled.div`
  text-align: center;
  font-size: 28px;
  font-family: "Lora", sans-serif;
  color: ${(props) => props.theme.titleColor};
`;

export const StyledBlogTitle = styled.div`
  margin: 10px 0;
  text-align: center;
  font-family: "Lora", sans-serif;
  color: ${(props) => props.theme.titleColor};
  font-size: 30px;
`;

export const StyledPostInfo = styled.div<MobileProps>`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  font-size: ${({ ismobile }) => (ismobile ? "14px" : "16px")};
  color: #be9656;
  font-family: "Varela Round", Arial, Helvetica, sans-serif;
`;

export const StyledPostDescription = styled.div<MobileProps>`
  padding: 0 20px;
  font-size: ${({ ismobile }) => (ismobile ? "14px" : "18px")};
  line-height: 25px;
  min-height: 200px;

  img {
    width: ${({ ismobile }) => (ismobile ? "50px" : "100px")};
    height: ${({ ismobile }) => (ismobile ? "50px" : "100px")};
    object-fit: cover;
  }
  > * {
    color: #666 !important;
  }
`;

export const StyledCommentsWrapper = styled.div<MobileProps>`
  padding: 5px 0;
  margin-top: 15px;
  border-top: ${({ ismobile }) => (ismobile ? "none" : "1px solid #eee")};
`;

export const StyledCommentInputBox = styled.div`
  width: 100%;
  border-bottom: 1px solid #cbcbcb;
  margin-bottom: 10px;

  input {
    padding: 10px 20px;
    width: 100%;
    border: none;
    font-size: 25px;
    font-family: inherit;
    outline: none;
  }
`;

export const StyledCommentsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledNoComments = styled.div`
  width: 100%;
  padding: 15px;
  font-weight: bold;
  font-size: 20px;
  color: ${(props) => (props.theme.isActive ? "white" : "black")};
  text-align: center;
`;

export const StyledLoggedInModal = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  font-family: cursive;
  font-size: 20px;
`;

export const StyledPostEdit = styled.div`
  float: right;
  font-size: 16px;
`;
