import React from "react";

const CommentForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <label htmlFor="comment">
          Add your comment
          <textarea
            name="body"
            placeholder="Write your comment here"
            onChange={props.handleBodyChange}
            value={props.newComment.body}
          />
          <input type="file" name="picture" onChange={props.handleFileChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default CommentForm;
