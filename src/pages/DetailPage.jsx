import React, { Component } from "react";
import Detail from "../components/Place/Detail";
import { post, get } from "../services/api";

export default class DetailPage extends Component {
  state = {
    place: { infos: {}, comments: [] },
    body: "",
    picture: null,
  };

  componentDidMount = () => {
    console.log(this.props);
    get(`/places/${this.props.computedMatch.params.id}`).then((result) => {
      this.setState({
        place: result.data,
      });
    });
  };

  handleCommentSubmit = (event) => {
    event.preventDefault();
    let formBody = new window.FormData();
    formBody.append("picture", this.state.picture);
    formBody.append("body", this.state.body);

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

  render() {
    const newComment = { body: this.state.body, picture: this.state.picture };
    return (
      <div>
        <Detail
          place={this.state.place}
          newComment={newComment}
          handleCommentSubmit={this.handleCommentSubmit}
          handleCommentChange={this.handleCommentChange}
          handleCommentFileChange={this.handleCommentFileChange}
        />
      </div>
    );
  }
}
