import React from "react";
import { Link } from "react-router-dom";

const Place = (props) => {
  const { place } = props;
  const url = `/detail/${place.place_id}`;
  return (
    <div>
      <h1>{place.name}</h1>
      <p>{place.address}</p>
      <Link to={url}>More details</Link>
      <a href="#">Favorite</a>
    </div>
  );
};

export default Place;
