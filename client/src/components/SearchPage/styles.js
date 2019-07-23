import styled from "styled-components";

export const SearchHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  background: #1e1e1e;
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  height: 20vh;
  flex-direction: column;
  color: white;
  font-size: 12px;
`;

export const SearchBarWrapper = styled.div`
  height: 20px;
  display: flex;
  margin: 0;
  padding: 0;
`;

export const StyledInput = styled.input`
  border: none;
  outline: none;
  width: 80%;
  height: 50px;
  margin: 0;
  padding: 0;

  ::-webkit-input-placeholder {
    font-weight: bold;
    color: black;
  }
`;

export const IconWrapper = styled.div`
  height: 50px;
  width: 40px;
  background: white;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
