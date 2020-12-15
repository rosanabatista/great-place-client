import React from "react";
import Comment from "./Comment";
import CommentForm from "./CommentForm";
import Infos from "./Infos";
import { Link } from "react-router-dom";

const Detail = (props) => {
  const { place } = props;
  const url = `/edit/${place.place_id}`;

  return (
    <div>
      <div>
        <Link to={url}>Add infos</Link>
      </div>
      <div>
        <a
          href="#"
          onClick={props.handleFavoriteClick}
          data-id={place.place_id}
        >
          Favorite
        </a>
      </div>
      <div className="container-fluid">
        <img src={place.icon} />
        <h1>{place.name}</h1>
        <p>{place.address}</p>
        <p>{place.phone}</p>
        <p>{place.website}</p>
      </div>
      <div>
        <Infos info={place.infos} />
      </div>
      <div>
        <h3>Comments</h3>
        <CommentForm
          newComment={props.newComment}
          handleSubmit={props.handleCommentSubmit}
          handleBodyChange={props.handleCommentChange}
          handleFileChange={props.handleCommentFileChange}
        />
        {place.comments.map((comment) => {
          return <Comment key={comment._id} comment={comment} />;
        })}
      </div>
    </div>
  );
};

export default Detail;
