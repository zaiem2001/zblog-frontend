import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
`;

export const StyledWrapper = styled.div`
  flex: 9;
  padding: 20px;
`;

export const StyledTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span:first-child {
    font-size: 30px;
    margin-bottom: 20px;
    color: lightcoral;
  }

  span:nth-child(2) {
    color: ${(props) => props.theme.color};
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
