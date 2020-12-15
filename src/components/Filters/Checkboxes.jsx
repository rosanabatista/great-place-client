import React from "react";
import Checkbox from "../Checkbox/Checkbox";
import info_options from "../../utils/info_options";

const Checkboxes = ({ infos, handleChange }) => {
  return (
    <ul className="list-unstyled" aria-labelledby="dropdownMenuButton">
      {info_options.map((option) => {
        return (
          <li>
            <Checkbox
              key={option.name}
              label={option.label} //the text that you see rendered next to a checkbox. This value is coming from OPTIONS array.
              isSelected={infos[option.name]}
              state={option.name}
              onCheckboxChange={handleChange}
              className="dropdown-item"
            />
          </li>
        );
      })}
    </ul>
  );
};

export default Checkboxes;
