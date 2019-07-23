import React from "react";
import {
  SearchBarWrapper,
  SearchHeader,
  StyledInput,
  IconWrapper
} from "./styles";
import NavBar from "../NavBar/index";
import { Icon } from "@iconify/react";
import baselineSearch from "@iconify/icons-ic/baseline-search";
import baselineMic from "@iconify/icons-ic/baseline-mic";
import SpotifyWebApi from "spotify-web-api-js";
import GenreContainer from "../GenreContainer/index";

const spotifyApi = new SpotifyWebApi();

class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      TopGenres: [],
      genreImg: [],
      id: [],
      token: window.location.hash.substring(1, 195),
      currentPage: "search"
    };
    spotifyApi.getAccessToken(this.state.token);
    this.getGenres = this.getGenres.bind(this);
  }

  getGenres = response => {
    for (let i = 0; i <= 4; i++) {
      this.setState(prevState => ({
        TopGenres: [...prevState.TopGenres, response.items[i].genres[0]],
        genreImg: [...prevState.genreImg, response.items[i].images[1].url],
        id: [...prevState.id, response.items[i].id]
      }));
    }
  };

  componentDidMount() {
    spotifyApi.getMyTopArtists().then(response => {
      this.getGenres(response);
    });
  }

  render() {
    const genresList = this.state.TopGenres;
    const genreImages = this.state.genreImg;
    const genreId = this.state.id;
    const token = this.state.token;
    return (
      <div>
        <SearchHeader>
          <h1>Search</h1>
          <SearchBarWrapper>
            <IconWrapper
              style={{
                borderRadius: "50px 0 0 50px"
              }}
            >
              <Icon
                height="20px"
                icon={baselineSearch}
                style={{
                  color: "black"
                }}
              />
            </IconWrapper>
            <StyledInput placeholder="Artists, songs, or podcasts" />
            <IconWrapper
              style={{
                borderRadius: "0 50px 50px 0"
              }}
            >
              <Icon
                height="20px"
                icon={baselineMic}
                style={{
                  color: "black"
                }}
              />
            </IconWrapper>
          </SearchBarWrapper>
        </SearchHeader>
        <GenreContainer
          id={genreId}
          TopGenres={genresList}
          genreImages={genreImages}
          token={token}
        />
        <NavBar token={this.state.token} currentPage={this.state.currentPage} />
      </div>
    );
  }
}

export default SearchPage;
