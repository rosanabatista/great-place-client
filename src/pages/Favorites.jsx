import React, { Component } from "react";
import Place from "../components/Place/Place";

export default class Favorites extends Component {
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
  };

  componentDidMount = () => {};

  render() {
    return (
      <div>
        {this.state.places.map((place) => {
          return <Place place={place} />;
        })}
      </div>
    );
  }
}
