import React from "react";

const Comment = (props) => {
  const { comment } = props;
  return (
    <div>
      <p>{comment.when}</p>
      <p>{comment.body}</p>
      {comment.picture && <img src={comment.picture} />}
    </div>
  );
};

export default Comment;
