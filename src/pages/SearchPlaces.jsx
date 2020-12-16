import React, { Component } from "react";
import Checkboxes from "../components/Filters/Checkboxes";
import Filters from "../components/Filters/Filters";
import Place from "../components/Place/Place";
import Searchbar from "../components/Searchbar/Searchbar";
import { get, post } from "../services/api";
import "../App.css";

export default class SearchPlaces extends Component {
  state = {
    places: [],
    query: "",
    lat: null,
    lng: null,
    infos: {},
  };

  componentDidMount = () => {
    if ("geolocation" in navigator) {
      console.log("geo is available");
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position.coords.latitude, position.coords.longitude);
        this.setState({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    } else {
      console.log("geo is not available");
    }
  };

  handleCheckboxChange = (event, state) => {
    this.setState((prevState) => {
      return {
        infos: {
          ...prevState.infos,
          [state]: !prevState.infos[state],
        },
      };
    });
  };

  handleSearchbarChange = (event) => {
    event.preventDefault();
    this.setState({ query: event.target.value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const filters = Object.keys(this.state.infos)
      .filter((key) => this.state.infos[key] === true)
      .join(",");

    if (this.state.lat && this.state.lng) {
      get(
        `/places/search?search=${this.state.query}&latitude=${this.state.lat}&longitude=${this.state.lng}&filters=${filters}`
      ).then((results) => {
        this.setState({
          places: results.data,
        });
      });
    } else {
      get(`/places/search?search=${this.state.query}&filters=${filters}`).then(
        (results) => {
          this.setState({
            places: results.data,
          });
        }
      );
    }
  };

  handleFavoriteClick = (event) => {
    event.preventDefault();
    const clickedItem = event.target.closest("a");
    post(`/favorites/${clickedItem.dataset.id}`).then((result) => {
      const places = this.state.places;
      const newFavorites = places.map((place) => {
        if (place.place_id === clickedItem.dataset.id) {
          place.isFavorite = !place.isFavorite;
        }
        return place;
      });
      this.setState({ places: newFavorites });
    });
  };

  render() {
    return (
      <div className="search-page">
        <div className="container">
          <div className="row align-items-center h-100">
            <form
              onSubmit={this.handleFormSubmit}
              className="col-lg-12 col-sm-12"
            >
              <Searchbar
                handleInputChange={this.handleSearchbarChange}
                query={this.state.query}
                infos={this.state.infos}
                handleCheckboxChange={this.handleCheckboxChange}
              />
            </form>
          </div>
          <div className="row">
            <h4>Select the filters:</h4>
            <div className="col-lg-3 sidebar">
              <form onSubmit={this.handleFormSubmit}>
                <Checkboxes
                  infos={this.state.infos}
                  handleChange={this.handleCheckboxChange}
                />
                <button className="button__submit">Search</button>
              </form>
            </div>
            <div className="col-lg-8">
              {this.state.places.map((place) => {
                return (
                  <Place
                    place={place}
                    handleFavoriteClick={this.handleFavoriteClick}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
