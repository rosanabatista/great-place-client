import React from "react";

const Checkbox = ({ label, isSelected, onCheckboxChange, state }) => {
  console.log(state);
  return (
    <div className="form-check">
      <label>
        <input
          type="checkbox"
          name={label}
          checked={isSelected}
          onChange={(e) => onCheckboxChange(e, state)}
          className="form-check-input"
        />
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
