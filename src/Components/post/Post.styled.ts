import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 385px;
  margin: 0px 25px 40px 25px;
  display: flex;
  flex-direction: column;

  height: 500px;
  max-height: 500px;
  box-shadow: ${({ theme }) =>
    theme.isActive ? "2px 2px 10px 0 rgba(0, 0, 0, 0.6)" : "none"};
  background-color: ${({ theme }) => (theme.isActive ? "transparent" : "#fff")};
`;

export const StyledBlogInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledPostCategories = styled.span`
  font-family: "Varela Round", Arial, Helvetica, sans-serif;
  font-weight: 400;
  font-size: 15px;
  color: ${({ theme }) => theme.color};
  line-height: 19px;
  margin-top: 15px;
  margin-right: 10px;
`;

export const StyledPostTitle = styled.span`
  font-family: "Josefin Sans", Arial, Helvetica, sans-serif;
  font-size: 24px;
  font-weight: 900;
  margin-top: 15px;
  cursor: pointer;
  color: ${({ theme }) => theme.titleColor};
`;

export const StyledPostDate = styled.span`
  font-family: "Lora", serif;
  font-style: italic;
  font-size: 13px;
  font-weight: 400;
  color: ${(props) => props.theme.color};
  margin-top: 15px;
`;

export const StyledPostDescription = styled.div`
  font-family: "Varela Round", Arial, Helvetica, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  margin-top: 15px;
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;

  > * {
    color: ${(props) => props.theme.descColor};
  }
`;
