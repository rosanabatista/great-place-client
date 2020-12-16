import React from "react";

const Comment = (props) => {
  const { comment } = props;
  const when = new Date(comment.when);
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          {comment.picture && (
            <img className="w-100" src={comment.picture} alt="comment" />
          )}
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <p className="card-title">
              Comment on: {when.toLocaleDateString()}
            </p>
            <p className="text-muted">Author: {comment.author.username}</p>
            <p className="card-text">{comment.body}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
