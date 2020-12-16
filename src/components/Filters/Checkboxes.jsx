import React from "react";
import Checkbox from "../Checkbox/Checkbox";
import info_options from "../../utils/info_options";

const Checkboxes = ({ infos, containerClasses, itemClasses, handleChange }) => {
  return (
    <div className={containerClasses}>
      {info_options.map((option) => {
        return (
          <div className={itemClasses}>
            <Checkbox
              key={option.name}
              label={option.label} //the text that you see rendered next to a checkbox. This value is coming from OPTIONS array.
              isSelected={infos[option.name]}
              state={option.name}
              onCheckboxChange={handleChange}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Checkboxes;
