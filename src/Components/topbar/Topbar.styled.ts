import { Link } from "react-router-dom";
import styled from "styled-components";
import { MobileProps } from "../../Constants/Interfaces";

interface Ham {
  isActive?: boolean;
}

export const StyledContainer = styled.div<MobileProps & Ham>`
  width: 100%;
  height: 50px;
  background-color: black;
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  z-index: 99;
  font-family: "Josefin Sans", sans-serif;

  ${({ ismobile, isActive }) =>
    ismobile &&
    `
    height:calc(100vh - 50px);
    top: 50px;
    position: absolute;
    z-index: 99;
    flex-direction: column;    
    transition: all ease-out 300ms;
    transform: ${isActive ? "translateX(0)" : "translateX(-100vw)"};
  `}
`;

export const StyledLogo = styled.span`
  font-size: 20px;
`;

export const StyledMobileContainer = styled.div`
  width: 100%;
  height: 50px;
  background-color: #121212;
  padding: 25px 16px;
  z-index: 999;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledHamBurgerWrapper = styled.div`
  position: relative;
  width: 35px;
  height: 30px;
  cursor: pointer;
`;

export const StyledHamBurger = styled.div<Ham>`
  background-color: #fff;
  height: 2px;
  width: 100%;

  transition: all ease-in-out 300ms;
  background-color: ${({ isActive }) => isActive && "crimson"};

  ::after,
  ::before {
    content: "";
    position: absolute;
    bottom: 34%;
    background-color: #fff;
    height: 2px;
    width: 35px;
    background-color: ${({ isActive }) => isActive && "crimson"};
    transition: all ease-in-out 300ms;
  }

  ::after {
    transform: ${({ isActive }) =>
      isActive ? "translateX(50%)" : "translateX(0)"};
  }

  ::before {
    top: 30%;

    transform: ${({ isActive }) =>
      isActive ? "translateX(25%)" : "translateX(0)"};
  }
`;

export const StyledLeftWrapper = styled.div<MobileProps>`
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  a,
  i {
    font-size: 20px;
    margin-right: 10px;
    color: #eee;
    cursor: pointer;
  }

  ${({ ismobile }) =>
    ismobile &&
    `
    flex: 1;
    align-items: center;
    justify-content: center;

    a,
  i {
    text-align: center;
    margin: 0 5px;
  }
  `}
`;

export const StyledTopCenter = styled.div<MobileProps>`
  flex: 6;
  width: 100%;

  ${({ ismobile }) =>
    ismobile &&
    `
    max-height: 200px;

    > ul {
      flex-direction: column;
      width: 100%;
      text-align: center;

      > li {
        margin: 10px 0px;
      }
    }
  `}
`;

export const StyledRightWrapper = styled(StyledLeftWrapper)`
  i {
    font-size: 18px;
    color: #666;
    cursor: pointer;
  }

  ${({ ismobile }) =>
    ismobile &&
    `
    flex: 3;
    justify-content: flex-start;
    gap: 25px;
    flex-direction: column;
  `}
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
