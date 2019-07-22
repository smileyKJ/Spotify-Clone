import React from "react";
import { CoverWrapper, CoverImg } from "./styles";
import HeroImg from "../../assets/Hero.png";

const Header = () => {
  return (
    <CoverWrapper>
      <CoverImg src={HeroImg} />
    </CoverWrapper>
  );
};

export default Header;
