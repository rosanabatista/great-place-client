import React, { Component } from "react";
import Filters from "../components/Filters/Filters";
import Place from "../components/Place/Place";
import Searchbar from "../components/Searchbar/Searchbar";
import { get } from "../services/api";

export default class SearchPlaces extends Component {
  state = {
    places: [
      {
        place_id: "cjbuiewu",
        name: "BAK restaurant",
        opening_hours: {
          open_now: true,
        },
        infos: {
          wheelchair_accessible: false,
          wheelchair_bathroom: false,
          braille_menu: false,
          braille_signs: false,
          large_menu: false,
          wheelchair_table: false,
          lights: false,
          comfortable_colors: false,
          noises: false,
          working_lift: false,
          decibels: "",
          sign_language: false,
          open_area: false,
          changing_ladies: false,
          changing_mens: false,
          high_chair: false,
          kids_menu: false,
          play_area: false,
          phone_charger: false,
          parking: false,
          strollers: false,
          breastfeeding: false,
        },
      },
    ],
    query: "vondel",
    lat: null,
    lng: null,
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
        // get(
        //   `/places/search?search=${this.state.query}&latitude=${this.state.lat}&longitude=${this.state.lng}`
        // ).then((results) => {
        //   this.setState({
        //     places: results.data,
        //   });
        // });
      });
    } else {
      console.log("geo is not available");
      //   get(
      //     `/places/search?search=${this.state.query}&latitude=${this.state.lat}&longitude=${this.state.lng}`
      //   ).then((results) => {
      //     this.setState({
      //       places: results.data,
      //     });
      //   });
    }
    // const params = {
    //   search: this.state.query,
    //   latitude: this.state.lat,
    //   longitude: this.state.lng,
    // };
  };

  render() {
    return (
      <div>
        <Searchbar />
        <Filters />
        {this.state.places.map((place) => {
          return <Place place={place} />;
        })}
      </div>
    );
  }
}
