import React, { Component } from "react";

export default class Searchbar extends Component {
  render() {
    return (
      <div>
        <input type="search" placeholder="search" />
        <button type="submit">Search</button>
      </div>
    );
  }
}
