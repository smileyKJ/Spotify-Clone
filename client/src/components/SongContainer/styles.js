import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;

  :last-child {
    margin-bottom: 25px;
  }
`;

export const StyledImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 5px;
`;

export const SpanContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 12px;
`;

export const BoldSpan = styled.span`
  font-weight: bold;
  font-color: white;
`;

export const GreySpan = styled.span`
  font-color: grey;
`;
