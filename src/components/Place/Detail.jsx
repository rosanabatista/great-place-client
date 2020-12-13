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
      <Link to={url}>Add infos</Link>
      <h1>{place.name}</h1>
      <img src={place.icon} />
      <p>{place.address}</p>
      <p>{place.phone}</p>
      <p>{place.website}</p>
      <Infos info={place.infos} />
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
  );
};

export default Detail;
