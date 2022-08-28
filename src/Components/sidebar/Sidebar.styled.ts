import styled from "styled-components";

export const StyledContainer = styled.div`
  flex: 3;
  height: fit-content;
  margin: 20px;
  padding: 30px 0;
  background-color: #000;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: sticky;
  top: 0;
`;

export const StyledSideBarItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-top: 15px;
    width: 350px;
    height: 250px;
    object-fit: cover;
  }
`;

export const StyledTitle = styled.span`
  margin: 10px;
  padding: 5px;
  width: 80%;
  border-top: solid 1px #a7a4a4;
  border-bottom: solid 1px #a7a4a4;
  text-align: center;
  font-family: "Varela Round", sans-serif;
  font-size: 12px;
  line-height: 19px;
  color: #cbcbcb;
  font-weight: 600;
`;

export const StyledList = styled.ul`
  list-style-type: none;
  margin-bottom: 30px;
`;

export const StyledListItem = styled.li`
  display: inline-block;
  flex-wrap: wrap;
  width: 50%;
  margin-top: 15px;
  cursor: pointer;
  color: #eee;
`;

export const StyledSocial = styled.div`
  margin-top: 15px;
  width: 250px;
  display: flex;
  align-items: center;
  color: white;
  justify-content: center;

  i {
    font-size: 16px;
    margin-left: 10px;
  }
`;
