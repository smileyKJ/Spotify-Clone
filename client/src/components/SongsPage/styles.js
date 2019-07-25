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
  display: flex;
  flex-direction: column;
  postion: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;

export const StyledAudio = styled.audio`
  width: 80%;
  height: 100%;
`;

export const AudioWrapper = styled.div`
  display: flex;
  justify-content:center:
  align-items:center;
  position: fixed;
  top: 80vh;
  height: 10vh;
  width: 100%;
  background: black;
  padding: 0;
  margin: 0;
  left: 0;
`;

export const MusicPlayer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  z-index: 10;
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
  margin: 0;
  padding: 0;
  postion: fixed;
  background: black;
`;

export const StyledIcon = styled.I;
