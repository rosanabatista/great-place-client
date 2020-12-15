import React from "react";
import { Link } from "react-router-dom";

const Place = (props) => {
  const { place } = props;
  console.log(place);
  const url = `/detail/${place.place_id}`;
  const favIcon = place.isFavorite ? "fas fa-heart" : "far fa-heart";
  return (
    <div className="row mb-5 position-relative">
      <div className="col-1">
        <img src={place.icon} />
      </div>
      <div className="col-11 ">
        <a
          href="#"
          onClick={props.handleFavoriteClick}
          data-id={place.place_id}
          className="position-absolute top-0 end-0 me-5 pe-5"
        >
          <i className={favIcon}></i>
        </a>
        <h1>
          <Link to={url}> {place.name}</Link>
        </h1>
        <p>{place.address}</p>
        <p>{place.vicinity}</p>
      </div>
    </div>
  );
};

export default Place;
