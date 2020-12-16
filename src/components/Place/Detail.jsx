import React from "react";
import Comment from "./Comment";
import CommentForm from "./CommentForm";
import Infos from "./Infos";
import { Link } from "react-router-dom";

const Detail = (props) => {
  const { place } = props;
  const url = `/edit/${place.place_id}`;
  const favIcon = place.isFavorite ? "fas fa-heart" : "far fa-heart";
  const imgURL = `${process.env.REACT_APP_SERVER_URL}/places/photos/${place.photo}`;
  return (
    <div className="container">
      <section>
        <div className="row mb-5 text-center">
          <div className="col-12">
            <img src={place.picture} alt={place.name} />
            <img src={imgURL} alt={place.name} />

            <h2>{place.name}</h2>
            <div className="col-12 pt-1">
              <p>{place.address}</p>
              <p>{place.phone}</p>
              <p>
                Go to website:{" "}
                <a
                  className="text-decoration-none"
                  href={place.website}
                  target="_blank"
                >
                  {place.website}
                </a>
              </p>
            </div>
            <Link to={url} className="add-info">
              Add info
            </Link>
            <a
              href="#"
              onClick={props.handleFavoriteClick}
              data-id={place.place_id}
              className="heart p-2"
            >
              <i className={favIcon}></i>
            </a>
          </div>
        </div>
      </section>

      <section className="infos-section">
        <div className="row mb-3 ">
          <div className="col-12 text-center mb-2">
            <h4>Here you can find:</h4>
          </div>
          <Infos info={place.infos} />
        </div>
      </section>

      <section className="comment-section">
        <div className="row mt-5">
          <div className="col-12">
            <h4>Comments</h4>
          </div>
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
      </section>
    </div>
  );
};

export default Detail;
