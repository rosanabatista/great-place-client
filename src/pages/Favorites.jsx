import { get, post } from "../services/api";
import React, { Component } from "react";
import Place from "../components/Place/Place";
import LoadingComponent from "../components/Loading/index";
import NoFavorites from "../components/Place/NoFavorites";

export default class Favorites extends Component {
  state = {
    places: [],
    loading: true,
  };

  componentDidMount = () => {
    get("/favorites").then((result) => {
      this.setState({ places: result.data, loading: false });
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
    if (this.state.loading) {
      return <LoadingComponent />;
    }
    if (this.state.places.length === 0) {
      return <NoFavorites />;
    }

    return (
      <div className="container">
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
