import React from "react";
import { FlexDiv, StyledImage } from "./styles";
import { Redirect } from "react-router-dom";
import SpotifyWebApi from "spotify-web-api-js";

const spotifyApi = new SpotifyWebApi();

class Albums extends React.Component {
  constructor(props) {
    super(props);
    const params = this.getHashParams();
    const token = params.access_token;
    if (token) {
      spotifyApi.setAccessToken(token);
    }
    this.state = {
      redirect: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState({ redirect: true });
  };

  getHashParams() {
    var hashParams = {};
    var e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    e = r.exec(q);
    while (e) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
      e = r.exec(q);
    }
    return hashParams;
  }

  render() {
    if (this.state.redirect) {
      return (
        <Redirect
          to={{
            pathname: `/songs/#${this.getHashParams().access_token}/#${
              this.props.id
            }/#${window.location.hash}`
          }}
        />
      );
    }

    if (this.props.circleDiv) {
      return (
        <FlexDiv>
          <StyledImage
            onClick={this.handleClick}
            style={{ borderRadius: "50%" }}
            src={this.props.SongsList.imageUrl[this.props.imageItem]}
            alt="album"
          />
          <p style={{ textAlign: "center" }}>
            {this.props.SongsList.name[this.props.imageItem]}
          </p>
        </FlexDiv>
      );
    } else {
      return (
        <FlexDiv>
          <StyledImage
            onClick={this.handleClick}
            src={this.props.SongsList.imageUrl[this.props.imageItem]}
            alt="album"
          />
          <p style={{ textAlign: "center" }}>
            {this.props.SongsList.name[this.props.imageItem]}
          </p>
        </FlexDiv>
      );
    }
  }
}

export default Albums;
