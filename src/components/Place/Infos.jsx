import React from "react";
import info_options from "../../utils/info_options";

const Infos = (props) => {
  const info = props.info;
  const available = Object.keys(info).filter((key) => info[key] === true);
  return (
    <div className="row">
      {available.map((key) => {
        const option = info_options.filter((item) => item.name === key);
        return (
          <div className="col-lg-4 col-sm-12 mt-2 mb-2" key={key}>
            <i className={option[0].icon}></i>
            <span className="ms-2">{option[0].label}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Infos;
