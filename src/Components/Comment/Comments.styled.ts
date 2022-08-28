import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  padding: 10px 0;
  margin-bottom: 15px;
  align-items: center;
`;

export const StyledLeftContainer = styled.div`
  display: flex;
  flex: 10;
  align-items: center;
`;

export const StyledImgContainer = styled.div`
  width: 40px;
  height: 40px;
  overflow: hidden;
  border-radius: 50%;
  margin-right: 10px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const StyledCommentedBy = styled.p`
  color: ${(props) => props.theme.color};
  font-weight: bold;
  margin: 0;
  margin-right: 20px;
`;

export const StyledUserComment = styled.p`
  padding: 0 10px;
  margin: 0;
  max-width: 80%;
  color: ${(props) => props.theme.color};
`;

export const StyledCommentTime = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: ${(props) => (props.theme.isActive ? "#cbcbcb" : "black")};
`;
