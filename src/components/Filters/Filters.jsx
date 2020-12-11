import React, { Component } from "react";
import Checkbox from "../Checkbox/Checkbox";

const options2 = [
  { state: "wheelchair_accessible", input: "Wheelchair accessible" },
  { state: "wheelchair_bathroom", input: "Wheelchair accessible bathroom" },
  { state: "wheelchair_table", input: "The table height fits to wheelchairs" },
  { state: "braille_menu", input: "Braille menus" },
  { state: "braille_signs", input: "Signs with Braille or tactile features" },
  { state: "large_menu", input: "Large type menu" },
  { state: "lights", input: "The lights are comfortable" },
  { state: "comfortable_colors", input: "The walls have comfortable colors" },
  { state: "noises", input: "There are no disturbing noises" },
  { state: "working_lift", input: "Working lift" },
  { state: "sign_language", input: "Staff who knows sign language" },
  { state: "open_area", input: "Open area" },
  { state: "changing_ladies", input: "Changing table on ladies bathroom" },
  { state: "changing_mens", input: "Changing table on mens bathroom" },
  { state: "high_chair", input: "High chair for children" },
  { state: "kids_menu", input: "Kid’s menu" },
  { state: "play_area", input: "Play area" },
  { state: "phone_charger", input: "Phone charger available" },
  { state: "parking", input: "Parking" },
  { state: "strollers", input: "Space for strollers near the table" },
  { state: "breastfeeding", input: "Breastfeeding friendly" },
];

class Filters extends Component {
  state = {
    checkboxes: options2.reduce((acc, { state }) => {
      return { ...acc, [state]: false };
    }, {}),
  };

  selectAllCheckboxes = (isSelected) => {
    Object.keys(this.state.checkboxes).forEach((checkbox) => {
      this.setState((prevState) => ({
        checkboxes: {
          ...prevState.checkboxes,
          [checkbox]: isSelected,
        },
      }));
    });
  };

  selectAll = () => this.selectAllCheckboxes(true);

  deselectAll = () => this.selectAllCheckboxes(false);

  handleFormSubmit = (formSubmitEvent) => {
    formSubmitEvent.preventDefault();

    Object.keys(this.state.checkboxes)
      .filter((checkbox) => this.state.checkboxes[checkbox])
      .forEach((checkbox) => {
        console.log(checkbox, "is selected.");
      });
  };

  handleCheckboxChange = (changeEvent, state) => {
    const { name } = changeEvent.target;
    this.setState((prevState) => {
      return {
        checkboxes: {
          ...prevState.checkboxes,
          [state]: !prevState.checkboxes[state],
        },
      };
    });
  };

  createCheckbox = (option) => (
    <Checkbox
      key={option.state}
      label={option.input} //the text that you see rendered next to a checkbox. This value is coming from OPTIONS array.
      isSelected={this.state.checkboxes[option.state]}
      state={option.state}
      onCheckboxChange={this.handleCheckboxChange}
    />
  );

  createCheckboxes = () => options2.map(this.createCheckbox);

  render() {
    console.log(this.state);
    return (
      <div className="container">
        <div className="row mt-5">
          <div className="col-sm-12">
            <form onSubmit={this.handleFormSubmit}>
              <div className="filter-checks">
                <h4>Filter results:</h4>
                {this.createCheckboxes()}
              </div>

              <div className="form-group mt-2">
                <button
                  type="button"
                  className="btn btn-outline-primary mr-2"
                  onClick={this.selectAll}
                >
                  Select All
                </button>
                <button
                  type="button"
                  className="btn btn-outline-primary mr-2"
                  onClick={this.deselectAll}
                >
                  Deselect All
                </button>
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Filters;
