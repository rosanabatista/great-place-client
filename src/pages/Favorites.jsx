import { get, post } from "../services/api";
import React, { Component } from "react";
import Place from "../components/Place/Place";

export default class Favorites extends Component {
  state = {
    places: [],
  };

  componentDidMount = () => {
    get("/favorites").then((result) => {
      this.setState({ places: result.data });
    });
  };
  handleFavoriteClick = (event) => {
    event.preventDefault();
    const id = event.target.closest("a").dataset.id;
    post(`/favorites/${id}`).then((result) => {
      const favorites = this.state.places;
      const newFavorites = favorites.filter(
        (favorite) => favorite.place_id !== id
      );
      this.setState({ places: newFavorites });
    });
  };

  render() {
    return (
      <div>
        {this.state.places.map((place) => {
          return (
            <Place
              place={place}
              handleFavoriteClick={this.handleFavoriteClick}
            />
          );
        })}
      </div>
    );
  }
}
