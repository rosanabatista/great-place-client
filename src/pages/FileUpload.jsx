import React, { Component } from "react";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5005/api/places/uploadFile",
});

const sendFileToBackend = (file, userId) => {
  let formBody = new window.FormData();
  formBody.append("comment-image", file);
  const id = userId;
  return api
    .post(`/${id}/new-comment`, formBody)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export default class FileUpload extends Component {
  state = {
    user: this.props.user,
    uploadedImage: null,
    imageFromBackEnd: null,
  };

  handleFormSubmission = (event) => {
    event.preventDefault();
    const image = this.state.uploadedImage;
    sendFileToBackend(image, this.state.user._id)
      .then((response) => {
        console.log(response);
        this.setState({
          imageFromBackEnd: response.imagePath,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleInputChange = (event) => {
    const uploadedImage = event.target.files[0];
    this.setState({
      uploadedImage,
    });
  };

  render() {
    return (
      <div>
        <h1>tsting cloudinary</h1>
        <form onSubmit={this.handleFormSubmission}>
          <input
            type="file"
            name="commentImage"
            onChange={this.handleInputChange}
          />
          <button type="submit">Upload image</button>
        </form>
        {this.state.imageFromBackEnd && (
          <div>
            <h1>Current pic</h1>
            <img width="300" src={this.state.imageFromBackEnd} />
          </div>
        )}
      </div>
    );
  }
}
