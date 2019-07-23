import React from "react";
import { Redirect } from "react-router-dom";
import GenreImageContainer from "./styles";

class GenreItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { redirect: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      redirect: true
    });
  }

  render() {
    if (this.state.redirect) {
      return (
        <Redirect
          to={{
            pathname: `/songs/#${this.props.token}/#${
              this.props.id
            }/#${window.location.hash.substring(197)}/#`
          }}
          currentPage="search"
        />
      );
    }
    return (
      <GenreImageContainer onClick={this.handleClick}>
        <img
          position="relative"
          src={this.props.genreImage}
          alt="genre"
          width="150px"
          height="150px"
        />
        <div position="absolute" margin-top="-50%">
          {this.props.TopGenres}
        </div>
      </GenreImageContainer>
    );
  }
}

export default GenreItem;
