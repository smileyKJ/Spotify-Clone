import styled from "styled-components";

const GenreWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: Wrap;
  position: absolute;
  top: 19vh;
  left: 0;
  margin: 0;
  padding: 0;
  height: 71vh;
  background: #2a2a2a;
  width: 100%;
  color: white;
  justify-content: space-around;
  align-items: center;
  border-radius: 12px 12px 0 0;

  & * {
    width: 40vw;
  }
`;
export default GenreWrapper;
