import React, { Component } from "react";
import Checkboxes from "../components/Filters/Checkboxes";
import { post, get } from "../services/api";
import LoadingComponent from "../components/Loading/index";

export default class EditPlace extends Component {
  state = {
    place: {},
    infos: {},
    loading: true,
  };

  componentDidMount = () => {
    get(`/places/${this.props.computedMatch.params.id}`).then((result) => {
      this.setState({
        place: result.data,
        infos: result.data.infos,
        loading: false,
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
    this.setState({ loading: true });
    event.preventDefault();
    post(
      `/places/${this.props.computedMatch.params.id}`,
      this.state.infos
    ).then((result) => {
      this.setState({ loading: false });

      this.props.history.push(`/detail/${this.props.computedMatch.params.id}`);
    });
  };

  render() {
    if (this.state.loading) {
      return <LoadingComponent />;
    }
    return (
      <div>
        <div>
          <h3 className="text-center">
            Click on the checkboxes to change infos about{" "}
            {this.state.place.name}
          </h3>
        </div>
        <form onSubmit={this.handleFormSubmit} className="container">
          <Checkboxes
            infos={this.state.infos}
            handleChange={this.handleCheckboxChange}
            containerClasses="row mb-3 mt-5 checkboxes"
            itemClasses="col-lg-4 col-sm-12 mb-2"
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
