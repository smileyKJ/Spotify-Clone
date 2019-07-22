import React from "react";
import {
  Wrapper,
  StyledImg,
  SpanContainer,
  BoldSpan,
  GreySpan
} from "./styles";

const SongContainer = props => {
  return (
    <Wrapper onClick={() => props.onClick(props.preview)}>
      <div>
        <StyledImg src={props.ImageUrl} alt="Album-small" />
      </div>

      <SpanContainer style={{ display: "flex", flexDirection: "column" }}>
        <BoldSpan>{props.TrackName}</BoldSpan>
        <GreySpan>{props.AlbumName}</GreySpan>
      </SpanContainer>
    </Wrapper>
  );
};

export default SongContainer;
