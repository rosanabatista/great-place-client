import React, { useState } from "react";
import { Link } from "react-router-dom";

const Place = (props) => {
  const { place } = props;
  const defaultImg =
    "https://upload.wikimedia.org/wikipedia/commons/b/be/KeizersgrachtReguliersgrachtAmsterdam.jpg";
  const [imgURL, setImageURL] = useState(place.picture);

  const url = `/detail/${place.place_id}`;
  const favIcon = place.isFavorite ? "fas fa-heart" : "far fa-heart";
  return (
    <div className="row mb-5 text-center place-click">
      <div className="col-lg-4 col-sm-2">
        <img
          className="w-100 mb-3"
          src={imgURL}
          alt={place.name}
          onError={() => {
            setImageURL(defaultImg);
          }}
        />
      </div>
      <div className="col-lg-8 col-sm-10">
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
