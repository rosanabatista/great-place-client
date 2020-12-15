import React, { Component } from "react";
import { signup } from "../services/auth";
import "./auth.css";

export default class Signup extends Component {
  state = {
    username: "",
    password: "",
    error: null,
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmission = (event) => {
    event.preventDefault();
    const credentials = {
      username: this.state.username,
      password: this.state.password,
    };
    signup(credentials).then((res) => {
      // successful signup
      console.log(res);
      if (!res.status) {
        // unsuccessful signup
      }
      localStorage.setItem("accessToken", res.data.accessToken);
      this.props.authenticate(res.data.user);
      this.props.history.push("/");
    });
  };

  render() {
    return (
      <div>
        <h2 className="text-center">Sign Up</h2>
        <form onSubmit={this.handleFormSubmission} className="auth__form">
          <div className="row g-3 align-items-center mb-3">
            <div className="col-auto">
              <label htmlFor="input-username" className="col-form-label">
                Username
              </label>
            </div>
            <input
              id="input-username"
              type="text"
              name="username"
              placeholder="Type your username here"
              value={this.state.username}
              onChange={this.handleInputChange}
              required
              className="form-control mt-0"
            />
          </div>
          <div className="row g-3 align-items-center">
            <div className="col-auto">
              <label htmlFor="input-password" className="col-form-label">
                Password
              </label>
            </div>
            <input
              id="input-password"
              type="password"
              name="password"
              placeholder="Type your password here"
              value={this.state.password}
              onChange={this.handleInputChange}
              required
              minLength="8"
              className="form-control mt-0"
              aria-describedby="passwordHelpInline"
            />
            <div className="col-auto mt-0">
              <span id="passwordHelpInline" className="form-text">
                Must be at least 8 characters long.
              </span>
            </div>
          </div>

          {this.state.error && (
            <div className="error-block">
              <p>There was an error submiting the form:</p>
              <p>{this.state.error.message}</p>
            </div>
          )}

          <button className="button__submit button" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
