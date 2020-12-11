import React, { Component } from "react";
import Filters from "../components/Filters/Filters";
import Place from "../components/Place/Place";
import Searchbar from "../components/Searchbar/Searchbar";

export default class SearchPlaces extends Component {
  componentDidMount = () => {
    if ("geolocation" in navigator) {
      console.log("geo is available");
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position.coords.latitude, position.coords.longitude);
      });
    } else {
      console.log("geo is not available");
    }
  };

  render() {
    return (
      <div>
        <Searchbar />
        <Filters />
        <Place />
      </div>
    );
  }
}
