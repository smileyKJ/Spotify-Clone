import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 40vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  background: #1e1e1e;
  color: white;
`;

export const SectionContainer = styled.div`
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  position: fixed;
  top: 35vh;
  left: 0;
  margin: 0;
  padding: 0;
  background: #2a2a2a;
  color: white;
  height: 45vh;
  width: 100%;
  border-radius: 10% 10% 0 0;
`;

export const SongsWrapper = styled.div`
    display:flex;
    flex:direction:column;
    overflow-y:hidden;
`;

export const StyledAudio = styled.audio`
  position: fixed;
  top: 80vh;
  height: 10vh;
`;

export const StyledIcon = styled.I;
