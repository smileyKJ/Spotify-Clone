import React from "react";
import FlexDiv from "./styles";
import Albums from "../Albums/index";

const AlbumContainer = props => {
  return (
    <FlexDiv>
      <Albums
        SongsList={props.SongsList}
        imageItem={0}
        circleDiv={props.circleDiv}
        id={props.SongsList.id[0]}
      />
      <Albums
        SongsList={props.SongsList}
        imageItem={1}
        circleDiv={props.circleDiv}
        id={props.SongsList.id[1]}
      />
      <Albums
        SongsList={props.SongsList}
        imageItem={2}
        circleDiv={props.circleDiv}
        id={props.SongsList.id[2]}
      />
    </FlexDiv>
  );
};

export default AlbumContainer;
