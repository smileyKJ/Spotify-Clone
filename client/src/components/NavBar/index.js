import React from "react";
import NavWrapper from "./styles";
import { Icon } from "@iconify/react";
import baselineQueueMusic from "@iconify/icons-ic/baseline-queue-music";
import baselineHome from "@iconify/icons-ic/baseline-home";
import baselineSearch from "@iconify/icons-ic/baseline-search";

const NavBar = () => {
  return (
    <NavWrapper>
      <Icon icon={baselineQueueMusic} color="grey" />
      <Icon icon={baselineHome} color="white" />
      <Icon icon={baselineSearch} color="grey" />
    </NavWrapper>
  );
};

export default NavBar;
