import React from "react";

const CommentForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <label htmlFor="comment" className="form-label">
        Add your comment:
      </label>
      <textarea
        name="body"
        placeholder="Write your comment here"
        onChange={props.handleBodyChange}
        value={props.newComment.body}
        className="form-control"
      />
      <label className="form-label">Upload a picture</label>
      <input
        className="form-control"
        type="file"
        name="picture"
        onChange={props.handleFileChange}
      />

      <button type="submit" className="button__submit">
        Submit
      </button>
    </form>
  );
};

export default CommentForm;
