import React, { Component } from "react";
import Checkboxes from "../components/Filters/Checkboxes";
import Place from "../components/Place/Place";
import Searchbar from "../components/Searchbar/Searchbar";
import { get, post } from "../services/api";
import "../App.css";
import NoPlaces from "../components/Place/NoPlaces";
import LoadingComponent from "../components/Loading/index";

export default class SearchPlaces extends Component {
  state = {
    places: [],
    query: "",
    lat: null,
    lng: null,
    infos: {},
    loading: false,
  };

  componentDidMount = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.setState({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    } else {
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
    this.setState({ loading: true });
    if (this.state.lat && this.state.lng) {
      get(
        `/places/search?search=${this.state.query}&latitude=${this.state.lat}&longitude=${this.state.lng}&filters=${filters}`
      ).then((results) => {
        this.setState({
          places: results.data,
          loading: false,
        });
      });
    } else {
      get(`/places/search?search=${this.state.query}&filters=${filters}`).then(
        (results) => {
          this.setState({
            places: results.data,
            loading: false,
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
    if (this.state.loading) {
      return <LoadingComponent />;
    }

    return (
      <div className="search-page">
        <div className="container mt-3">
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
            <div className="col-lg-3">
              <form onSubmit={this.handleFormSubmit}>
                <div class="accordion" id="accordionExample">
                  <div class="accordion-item sidebar">
                    <h2 class="accordion-header" id="headingOne">
                      <button
                        class="accordion-button acc-btn collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Select the filters:
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <Checkboxes
                        infos={this.state.infos}
                        handleChange={this.handleCheckboxChange}
                        containerClasses="accordion-body"
                      />
                      <div className="text-center">
                        <button className="button__submit">Search</button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-8">
              {this.state.places.length === 0 && <NoPlaces />}
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
