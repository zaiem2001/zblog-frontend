import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  height: 50px;
  background-color: black;
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  z-index: 999;
  font-family: "Josefin Sans", sans-serif;
`;

export const StyledLeftWrapper = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: center;

  a,
  i {
    font-size: 20px;
    margin-right: 10px;
    color: #eee;
    cursor: pointer;
  }
`;

export const StyledRightWrapper = styled(StyledLeftWrapper)`
  i {
    font-size: 18px;
    color: #666;
    cursor: pointer;
  }
`;

export const StyledTopCenter = styled.div`
  flex: 6;
`;

export const StlyedTopUl = styled.ul`
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const StyledTopListItem = styled.li`
  margin-right: 20px;
  font-size: 18px;
  font-weight: 300;
  cursor: pointer;
  color: #eee;

  &:hover {
    color: crimson !important;
  }
`;

export const StyledThemeContainer = styled.div`
  margin-left: 25px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 200px;
  color: #666;

  img {
    margin: 0 10px;
    width: 30px;
    height: 30px;
    object-fit: cover;
  }
`;

export const StyledLink = styled(Link)`
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 15px;
    cursor: pointer;
  }
`;
