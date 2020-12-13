import React, { Component } from "react";
import Checkboxes from "../components/Filters/Checkboxes";
import { post, get } from "../services/api";

export default class EditPlace extends Component {
  state = {
    place: {},
    infos: {},
  };

  componentDidMount = () => {
    get(`/places/${this.props.computedMatch.params.id}`).then((result) => {
      this.setState({
        place: result.data,
        infos: result.data.infos,
      });
    });
  };

  handleCheckboxChange = (event, state) => {
    this.setState((prevState) => {
      return {
        infos: {
          ...prevState.infos,
          [state]: !prevState.infos[state],
        },
      };
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    post(
      `/places/${this.props.computedMatch.params.id}`,
      this.state.infos
    ).then((result) => {
      this.props.history.push(`/detail/${this.props.computedMatch.params.id}`);
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.place.name}</h1>
        <form onSubmit={this.handleFormSubmit}>
          <Checkboxes
            infos={this.state.infos}
            handleChange={this.handleCheckboxChange}
          />
          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
}
