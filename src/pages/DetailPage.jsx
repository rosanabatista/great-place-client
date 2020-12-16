import React, { Component } from "react";
import Detail from "../components/Place/Detail";
import { post, get } from "../services/api";
import LoadingComponent from "../components/Loading/index";

export default class DetailPage extends Component {
  state = {
    place: { infos: {}, comments: [] },
    body: "",
    picture: null,
    loading: true,
  };

  componentDidMount = () => {
    console.log(this.props);
    get(`/places/${this.props.computedMatch.params.id}`).then((result) => {
      this.setState({
        place: result.data,
        loading: false,
      });
    });
  };

  handleCommentSubmit = (event) => {
    event.preventDefault();
    let formBody = new window.FormData();
    formBody.append("picture", this.state.picture);
    formBody.append("body", this.state.body);
    this.setState({ loading: true });

    post(`/places/${this.state.place.place_id}/new-comment`, formBody).then(
      (result) => {
        const comment = result.data.comment;
        let comments = this.state.place.comments;
        let place = this.state.place;
        comments.push(comment);
        place.comments = comments;
        this.setState({
          place: place,
          body: "",
          picture: null,
          loading: false,
        });
      }
    );
  };

  handleCommentChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleCommentFileChange = (event) => {
    const picture = event.target.files[0];
    this.setState({
      picture,
    });
  };

  handleFavoriteClick = (event) => {
    event.preventDefault();
    console.log(event.target.dataset.id);
    post(`/favorites/${event.target.closest("a").dataset.id}`).then(
      (result) => {
        const place = this.state.place;
        place.isFavorite = !place.isFavorite;
        this.setState({ place: place });
      }
    );
  };

  render() {
    if (this.state.loading) {
      return <LoadingComponent />;
    }
    const newComment = { body: this.state.body, picture: this.state.picture };
    return (
      <div>
        <Detail
          place={this.state.place}
          newComment={newComment}
          handleCommentSubmit={this.handleCommentSubmit}
          handleCommentChange={this.handleCommentChange}
          handleCommentFileChange={this.handleCommentFileChange}
          handleFavoriteClick={this.handleFavoriteClick}
        />
      </div>
    );
  }
}
