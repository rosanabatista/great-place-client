import React from "react";

const Infos = (props) => {
  const info = props.info;
  const available = Object.keys(info).filter((key) => info[key] === true);
  return (
    <div>
      {available.map((key) => {
        return <div key={key}>{key}</div>;
      })}
    </div>
  );
};

export default Infos;
