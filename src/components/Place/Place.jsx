import React from "react";
import { Link } from "react-router-dom";

const Place = (props) => {
  const { place } = props;
  console.log(place);
  const url = `/detail/${place.place_id}`;
  const favIcon = place.isFavorite ? "fas fa-heart" : "far fa-heart";
  return (
    <div className="row mb-5">
      <div className="text-center place-click">
        <h3>
          <Link to={url} className="text-decoration-none place">
            {place.name}
          </Link>
        </h3>
        <p>{place.address}</p>
        <p>{place.vicinity}</p>
        <a
          href="#"
          onClick={props.handleFavoriteClick}
          data-id={place.place_id}
        >
          <i className={favIcon}></i>
        </a>
      </div>
    </div>
  );
};

export default Place;
