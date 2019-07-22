import styled from "styled-components";

export const StyledSection = styled.div`
  height: 60vh;
  width: 100%;
  background: #2a2a2a;
  margin: 0;
  padding: 0;
  position: fixed;
  top: 30vh;
  left: 0;
  border-radius: 20px 20px 0 0;
  color: white;
  font-size: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const SpanContainer = styled.div`
  margin-left: 20px;
`;

export const BoldSpan = styled.span`
  font-weight: bold;
  font-color: white;
`;

export const GreySpan = styled.span`
  font-color: grey;
`;

export default StyledSection;
