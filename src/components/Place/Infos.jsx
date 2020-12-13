import React from "react";
import info_options from "../../utils/info_options";

const Infos = (props) => {
  const info = props.info;
  const available = Object.keys(info).filter((key) => info[key] === true);
  return (
    <div>
      {available.map((key) => {
        const option = info_options.filter((item) => item.name === key);
        return <div key={key}>{option[0].label}</div>;
      })}
    </div>
  );
};

export default Infos;
