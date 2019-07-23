import React from "react";
import GenreWrapper from "./styles";
import GenreItem from "../GenreItem/index";

const GenreContainer = props => {
  return (
    <GenreWrapper>
      <GenreItem
        id={props.id[4]}
        TopGenres={props.TopGenres[4]}
        genreImage={props.genreImages[4]}
        token={props.token}
      />
      <GenreItem
        id={props.id[1]}
        TopGenres={props.TopGenres[1]}
        genreImage={props.genreImages[1]}
        token={props.token}
      />
      <GenreItem
        id={props.id[2]}
        TopGenres={props.TopGenres[2]}
        genreImage={props.genreImages[2]}
        token={props.token}
      />
      <GenreItem
        id={props.id[3]}
        TopGenres={props.TopGenres[3]}
        genreImage={props.genreImages[3]}
        token={props.token}
      />
    </GenreWrapper>
  );
};
export default GenreContainer;
