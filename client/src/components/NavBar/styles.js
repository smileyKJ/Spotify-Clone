import styled from "styled-components";

const NavWrapper = styled.div`
  width: 100%;
  position: fixed;
  left: 0;
  background: #c31432;
  background: linear-gradient(to right, #240b36, #c31432);
  height: 10vh;
  bottom: 0;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: Center;

  & * {
    margin: 10px;
    width: 25px;
    height: 100px;
  }
`;

export default NavWrapper;
