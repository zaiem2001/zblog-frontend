import styled from "styled-components";

export const StyledContainer = styled.div`
  .header {
    margin-top: 60px;
  }
`;

export const StyledHeaderTitles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Lora", serif;
  color: #fff;

  span:first-child {
    position: absolute;
    top: 11%;
    font-size: 55px;
    z-index: 1;
    color: ${(props) => (props.theme.isActive ? "#6c63ff" : "black")};
  }

  span:last-child {
    position: absolute;
    top: 20%;
    font-size: 100px;
    z-index: 1;
    color: ${(props) =>
      props.theme.isActive ? "white" : props.theme.titleColor};
  }
`;

export const StyledImgBox = styled.div`
  opacity: ${({ theme }) => (theme.isActive ? 0.5 : 0.8)};

  img {
    height: 450px;
    width: 100%;
    margin-top: 80px;
    object-fit: cover;
  }
`;
