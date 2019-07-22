import React from "react";
import Header from "../Header/index";
import HomeSection from "../HomeSection/index";
import HomeWrapper from "./styles";
import NavBar from "../NavBar/index";

const Homepage = props => {
  return (
    <HomeWrapper>
      <Header />
      <HomeSection
        RecentlyPlayedTracks={props.recentlyPlayedTracks}
        HeavyRotation={props.HeavyRotation}
      />
      <NavBar />
    </HomeWrapper>
  );
};

export default Homepage;
