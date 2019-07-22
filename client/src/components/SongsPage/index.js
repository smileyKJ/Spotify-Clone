import React from "react";
import SpotifyWebApi from "spotify-web-api-js";
import { StyledImage } from "../Albums/styles";
import { Redirect } from "react-router-dom";
import {
  HeaderContainer,
  SectionContainer,
  SongsWrapper,
  StyledAudio
} from "./styles";
import SongContainer from "../SongContainer/index";
import NavBar from "../NavBar/index";
import { Icon } from "@iconify/react";
import baselineKeyboardArrowLeft from "@iconify/icons-ic/baseline-keyboard-arrow-left";

const spotifyApi = new SpotifyWebApi();

class SongsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: window.location.hash.substring(1, 195),
      id: window.location.hash.substring(197, 219),
      artistInfo: { name: "", imgUrl: "" },
      artistTracks: {
        trackName: [],
        albumName: [],
        imageUrl: [],
        preview_url: []
      },
      currentPlaying: "",
      redirect: false
    };

    this.getArtistNameAndUrl = this.getArtistNameAndUrl.bind(this);
    this.getArtistTracks = this.getArtistTracks.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleRedirect = this.handleRedirect.bind(this);
  }

  handleRedirect() {
    this.setState({
      redirect: true
    });
  }

  handleClick(item) {
    this.setState({
      currentPlaying: item
    });
  }

  getArtistNameAndUrl(response) {
    this.setState(prevState => {
      let artistInfo = Object.assign({}, prevState.artistInfo);
      artistInfo.name = response.name;
      artistInfo.imgUrl = response.images[1].url;
      return { artistInfo };
    });
  }

  getArtistTracks(response) {
    for (let i = 0; i < 4; i++) {
      this.setState(prevState => {
        let artistTracks = Object.assign({}, prevState.artistTracks);
        artistTracks.trackName.push(response.tracks[i].name);
        artistTracks.albumName.push(response.tracks[i].album.name);
        artistTracks.preview_url.push(response.tracks[i].preview_url);
        artistTracks.imageUrl.push(response.tracks[i].album.images[2].url);
        return { artistTracks };
      });
    }
  }

  componentDidMount() {
    spotifyApi
      .getArtist(`${this.state.id}`, "IN")
      .then(response => this.getArtistNameAndUrl(response));

    spotifyApi
      .getArtistTopTracks(`${this.state.id}`, "IN")
      .then(response => this.getArtistTracks(response));
  }

  render() {
    if (this.state.redirect) {
      return (
        <Redirect
          to={{
            pathname: `/home/${window.location.hash.substring(221)}`
          }}
        />
      );
    }

    const {
      trackName,
      albumName,
      imageUrl,
      preview_url
    } = this.state.artistTracks;
    const items = [];
    for (let i = 0; i < 4; i++) {
      items.push(
        <SongContainer
          TrackName={trackName[i]}
          AlbumName={albumName[i]}
          ImageUrl={imageUrl[i]}
          preview={preview_url[i]}
          key={i}
          onClick={this.handleClick}
        />
      );
    }
    return (
      <SongsWrapper>
        <HeaderContainer>
          <Icon
            icon={baselineKeyboardArrowLeft}
            color="white"
            width="45px"
            height="45px"
            style={{ marginRight: "75%" }}
            onClick={this.handleRedirect}
          />
          <StyledImage src={this.state.artistInfo.imgUrl} alt="album" />
          <p>{this.state.artistInfo.name}</p>
        </HeaderContainer>
        <SectionContainer>{items}</SectionContainer>
        <StyledAudio
          ref="audio_tag"
          src={this.state.currentPlaying}
          controls
          autoPlay
        />
        <NavBar />
      </SongsWrapper>
    );
  }
}

export default SongsPage;
