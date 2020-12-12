import React from "react";
import Comment from "./Comment";
import CommentForm from "./CommentForm";
import Infos from "./Infos";

const Detail = (props) => {
  const { place } = props;
  return (
    <div>
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
