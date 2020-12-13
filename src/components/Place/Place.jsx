import React from "react";
import { Link } from "react-router-dom";

const Place = (props) => {
  const { place } = props;
  const url = `/detail/${place.place_id}`;
  return (
    <div>
      <h1>{place.name}</h1>
      <img src={place.icon} />
      <p>{place.address}</p>
      <Link to={url}>More details</Link>
      <a href="#" onClick={props.handleFavoriteClick} data-id={place.place_id}>
        Favorite
      </a>
    </div>
  );
};

export default Place;
