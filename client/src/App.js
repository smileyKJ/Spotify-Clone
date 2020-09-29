import React, { Component } from "react";
import "./App.css";
import SpotifyWebApi from "spotify-web-api-js";
import Homepage from "./components/Homepage";
import SongsPage from "./components/SongsPage";
import SearchPage from "./components/SearchPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const spotifyApi = new SpotifyWebApi();

const Login = () => {
  return <a href="http://localhost:8888"> Login to Spotify</a>;
};

export default class App extends Component {
  constructor() {
    super();
    const params = this.getHashParams();
    const token = params.access_token;
    if (token) {
      spotifyApi.setAccessToken(token);
    }
    this.state = {
      loggedIn: params.access_token ? true : false,
      recentlyPlayedTracks: { name: [], imageUrl: [], id: [] },
      heavyRotation: { name: [], imageUrl: [], id: [] },
      token: token
    };
    spotifyApi
      .getMyRecentlyPlayedTracks()
      .then(response => this.getRecentlyPlayedArtistsAndImages(response));

    this.getRecentlyPlayedArtistsAndImages = this.getRecentlyPlayedArtistsAndImages.bind(
      this
    );
    this.getMyTopTracks = this.getMyTopTracks.bind(this);
  }

  getMyTopTracks(response) {
    for (let i = 0; i < 3; i++) {
      this.setState(prevState => {
        let heavyRotation = Object.assign({}, prevState.heavyRotation);
        heavyRotation.name.push(response.items[i].album.artists[0].name);
        heavyRotation.imageUrl.push(response.items[i].album.images[1].url);
        heavyRotation.id.push(response.items[i].album.artists[0].id);
        return { heavyRotation };
      });
    }
  }

  getRecentlyPlayedArtistsAndImages(response) {
    for (let i = 0; i < 3; i++) {
      this.setState(prevState => {
        let recentlyPlayedTracks = Object.assign(
          {},
          prevState.recentlyPlayedTracks
        );
        recentlyPlayedTracks.name.push(
          response.items[i].track.album.artists[0].name
        );
        recentlyPlayedTracks.imageUrl.push(
          response.items[i].track.album.images[1].url
        );
        recentlyPlayedTracks.id.push(
          response.items[i].track.album.artists[0].id
        );
        return { recentlyPlayedTracks };
      });
    }
  }

  componentDidMount() {
    spotifyApi.getMyTopTracks().then(response => this.getMyTopTracks(response));
  }

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
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route
            path="/home"
            component={() => (
              <Homepage
                recentlyPlayedTracks={this.state.recentlyPlayedTracks}
                HeavyRotation={this.state.heavyRotation}
                token={this.state.token}
                url={window.location.hash}
              />
            )}
          />
          <Route
            path="/songs/"
            component={() => <SongsPage token={this.state.token} />}
          />
          <Route path="/search/" component={() => <SearchPage />} />
        </Switch>
      </Router>
    );
  }
}
