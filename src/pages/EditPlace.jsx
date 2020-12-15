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
        <h3 className="text-center">
          Click on the checkboxes to change infos about {this.state.place.name}
        </h3>
        <form onSubmit={this.handleFormSubmit} className="container">
          <Checkboxes
            infos={this.state.infos}
            handleChange={this.handleCheckboxChange}
          />
          <div className="text-center mt-2">
            <button type="submit" className="button button__submit">
              Send
            </button>
          </div>
        </form>
      </div>
    );
  }
}
