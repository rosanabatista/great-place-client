import React from "react";
import Comment from "./Comment";
import Infos from "./Infos";

const Detail = (props) => {
  const { place } = props;
  return (
    <div>
      <h1>{place.name}</h1>
      <p>{place.address}</p>
      <p>{place.phone}</p>
      <p>{place.website}</p>
      <Infos info={place.infos} />
      {place.comments.map((comment) => {
        return <Comment comment={comment} />;
      })}
    </div>
  );
};

export default Detail;
