import React from "react";
import NavWrapper from "./styles";
import { Icon } from "@iconify/react";
import baselineQueueMusic from "@iconify/icons-ic/baseline-queue-music";
import baselineHome from "@iconify/icons-ic/baseline-home";
import baselineSearch from "@iconify/icons-ic/baseline-search";
import { Redirect } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { redirect: false, homeRedirect: false };
    this.handleSearchRedirect = this.handleSearchRedirect.bind(this);
    this.handleHomeRedirect = this.handleHomeRedirect.bind(this);
  }

  handleSearchRedirect = () => {
    this.setState({
      redirect: true
    });
  };

  handleHomeRedirect = () => {
    this.setState({
      homeRedirect: true
    });
  };

  render() {
    if (
      this.props.currentPage !== "songs" &&
      this.props.currentPage !== "search" &&
      this.state.redirect
    ) {
      return (
        <Redirect
          to={{
            pathname: `/search/#${this.props.token}/${this.props.location}`
          }}
        />
      );
    }

    if (
      this.props.currentPage !== "songs" &&
      this.props.currentPage === "search" &&
      this.state.homeRedirect
    ) {
      return (
        <Redirect
          to={{
            pathname: `/home/${window.location.hash.substring(196)}`
          }}
        />
      );
    }

    return (
      <NavWrapper>
        <Icon icon={baselineQueueMusic} color="grey" />
        <Icon
          icon={baselineHome}
          color="grey"
          onClick={this.handleHomeRedirect}
        />
        <Icon
          icon={baselineSearch}
          color="grey"
          onClick={this.handleSearchRedirect}
        />
      </NavWrapper>
    );
  }
}

export default NavBar;
