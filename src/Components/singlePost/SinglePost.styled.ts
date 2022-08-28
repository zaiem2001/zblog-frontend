import styled from "styled-components";

export const StyledContainer = styled.div`
  flex: 9;
`;

export const StyledWrapper = styled.div`
  padding: 20px;
  padding-right: 0;
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

export const StyledPostInfo = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  color: #be9656;
  font-family: "Varela Round", Arial, Helvetica, sans-serif;
`;

export const StyledPostDescription = styled.div`
  padding: 0 20px;
  font-size: 18px;
  line-height: 25px;
  min-height: 200px;

  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
  }
  > * {
    color: #666 !important;
  }
`;

export const StyledCommentsWrapper = styled.div`
  padding: 5px 0;
  margin-top: 15px;
  border-top: 1px solid #eee;
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
