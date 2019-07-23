import React from "react";
import Header from "../Header/index";
import HomeSection from "../HomeSection/index";
import HomeWrapper from "./styles";
import NavBar from "../NavBar/index";

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentPage: "home" };
  }
  render() {
    return (
      <HomeWrapper>
        <Header />
        <HomeSection
          RecentlyPlayedTracks={this.props.recentlyPlayedTracks}
          HeavyRotation={this.props.HeavyRotation}
        />
        <NavBar
          token={this.props.token}
          currentPage={this.state.currentPage}
          location={this.props.url}
        />
      </HomeWrapper>
    );
  }
}

export default Homepage;
