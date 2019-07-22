import React from "react";
import AlbumContainer from "../AlbumContainer/index";
import { StyledSection, BoldSpan, GreySpan, SpanContainer } from "./styles";

const HomeSection = props => {
  return (
    <StyledSection>
      <SpanContainer>
        <BoldSpan>Home</BoldSpan> - <GreySpan>Recently Played</GreySpan>
      </SpanContainer>
      <AlbumContainer
        SongsList={props.RecentlyPlayedTracks}
        circleDiv={false}
      />
      <SpanContainer>
        <BoldSpan>Your heavy Rotation</BoldSpan> -{" "}
        <GreySpan>Music you've had repeat on this month</GreySpan>
      </SpanContainer>
      <AlbumContainer SongsList={props.HeavyRotation} circleDiv={true} />
    </StyledSection>
  );
};

export default HomeSection;
