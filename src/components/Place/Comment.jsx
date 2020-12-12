import React from "react";

const Comment = (props) => {
  const { comment } = props;
  const when = new Date(comment.when);
  return (
    <div>
      <p>{when.toLocaleDateString()}</p>
      <p>Author:{comment.author.username}</p>
      <p>{comment.body}</p>
      {comment.picture && <img src={comment.picture} />}
    </div>
  );
};

export default Comment;
