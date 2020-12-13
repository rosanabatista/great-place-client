import { get } from "../services/api";
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
