import React from "react";
import "./bar.css";

const Bar = (props) => {
  const dataParent = props;
  return (
    <div className="bar__frame">
      <div className="bar__align">
        <div className="bar__circle--icon">
          {dataParent?.icon && <dataParent.icon />}
        </div>
        <div>
          <p>{dataParent.title}</p>
          <p>{dataParent.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Bar;
