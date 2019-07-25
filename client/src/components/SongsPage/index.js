import React from "react";
import SpotifyWebApi from "spotify-web-api-js";
import { StyledImage } from "../Albums/styles";
import { Redirect } from "react-router-dom";
import {
  HeaderContainer,
  SectionContainer,
  SongsWrapper,
  StyledAudio,
  AudioWrapper,
  MusicPlayer
} from "./styles";
import SongContainer from "../SongContainer/index";
import NavBar from "../NavBar/index";
import { Icon } from "@iconify/react";
import baselineKeyboardArrowLeft from "@iconify/icons-ic/baseline-keyboard-arrow-left";
import baselineSkipPrevious from "@iconify/icons-ic/baseline-skip-previous";
import baselineSkipNext from "@iconify/icons-ic/baseline-skip-next";

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
      currentTrack: "",
      currentImage: "",
      redirect: false,
      customPlayer: false
    };

    this.getArtistNameAndUrl = this.getArtistNameAndUrl.bind(this);
    this.getArtistTracks = this.getArtistTracks.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleRedirect = this.handleRedirect.bind(this);
    this.handleCustomPlayer = this.handleCustomPlayer.bind(this);
    this.handleNextTrack = this.handleNextTrack.bind(this);
    this.handlePreviousTrack = this.handlePreviousTrack.bind(this);
  }

  handlePreviousTrack() {
    for (let i = 0; i < this.state.artistTracks.trackName.length; i++) {
      if (this.state.currentTrack === this.state.artistTracks.trackName[i]) {
        if (i === 0) {
          this.setState({
            currentTrack: this.state.artistTracks.trackName[9],
            currentImage: this.state.artistTracks.imageUrl[9],
            currentPlaying: this.state.artistTracks.preview_url[9]
          });
        } else {
          this.setState({
            currentTrack: this.state.artistTracks.trackName[(i - 1) % 9],
            currentImage: this.state.artistTracks.imageUrl[(i - 1) % 9],
            currentPlaying: this.state.artistTracks.preview_url[(i - 1) % 9]
          });
        }
      }
    }
  }

  handleNextTrack() {
    for (let i = 0; i < this.state.artistTracks.trackName.length; i++) {
      if (this.state.currentTrack === this.state.artistTracks.trackName[i]) {
        this.setState({
          currentTrack: this.state.artistTracks.trackName[(i + 1) % 10],
          currentImage: this.state.artistTracks.imageUrl[(i + 1) % 10],
          currentPlaying: this.state.artistTracks.preview_url[(i + 1) % 10]
        });
      }
    }
  }

  handleCustomPlayer() {
    if (this.state.currentPlaying !== "") {
      this.setState({
        customPlayer: !this.state.customPlayer
      });
    }
  }

  handleRedirect() {
    this.setState({
      redirect: true
    });
  }

  handleClick(item) {
    this.setState({
      currentPlaying: item.preview,
      currentTrack: item.TrackName,
      currentImage: item.ImageUrl
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
    for (let i = 0; i < 10; i++) {
      if (response.tracks[i] !== undefined) {
        this.setState(prevState => {
          let artistTracks = Object.assign({}, prevState.artistTracks);
          artistTracks.trackName.push(response.tracks[i].name);
          artistTracks.albumName.push(response.tracks[i].album.name);
          artistTracks.preview_url.push(response.tracks[i].preview_url);
          artistTracks.imageUrl.push(response.tracks[i].album.images[0].url);
          return { artistTracks };
        });
      }
    }
  }

  componentDidMount() {
    spotifyApi
      .getArtist(`${this.state.id}`, "US")
      .then(response => this.getArtistNameAndUrl(response));

    spotifyApi
      .getArtistTopTracks(`${this.state.id}`, "US")
      .then(response => this.getArtistTracks(response));
  }

  render() {
    if (this.state.redirect && window.location.hash.length < 579) {
      return (
        <Redirect
          to={{
            pathname: `/home/${window.location.hash.substring(221)}`
          }}
        />
      );
    } else if (this.state.redirect) {
      return (
        <Redirect
          to={{
            pathname: `/search/${window.location.hash.substring(0, 195) +
              window.location.hash.substring(219)}`
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

    const items = [],
      audio = [];

    for (let i = 0; i < 10; i++) {
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
    if (this.state.customPlayer === false) {
      audio.push(
        <AudioWrapper key="audio">
          <StyledAudio
            ref="audio_tag"
            src={this.state.currentPlaying}
            controls
          />
          <button onClick={this.handleCustomPlayer}>Toggle Player</button>
        </AudioWrapper>
      );
    } else {
      audio.push(
        <MusicPlayer key="audio-toggle">
          <img
            height="50%"
            width="100%"
            src={this.state.currentImage}
            alt="album custom player"
          />
          <div
            style={{
              color: "white",
              display: "flex",
              justifyContent: "flex-start"
            }}
          >
            CurrentTrack-{this.state.currentTrack}
          </div>
          <audio
            style={{ margin: "10px" }}
            ref="audio_tag"
            src={this.state.currentPlaying}
            controls
          />
          <div
            style={{
              color: "white",
              display: "flex",
              justifyContent: "space-around",
              width: "100%"
            }}
          >
            <Icon
              icon={baselineSkipPrevious}
              color="white"
              width="45px"
              height="45px"
              display="inline-block"
              onClick={this.handlePreviousTrack}
            />
            <button onClick={this.handleCustomPlayer}>Toggle Player</button>
            <Icon
              icon={baselineSkipNext}
              color="white"
              width="45px"
              height="45px"
              display="inline-block"
              onClick={this.handleNextTrack}
            />
          </div>
        </MusicPlayer>
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
        {audio}
        <NavBar currentPage="songs" />
      </SongsWrapper>
    );
  }
}

export default SongsPage;
