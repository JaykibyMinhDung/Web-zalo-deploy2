import React from "react";
import "./theme.css";

const Theme = (props) => {
  return (
    <React.Fragment>
      <div className="container--header">
        <div className=" background--header"></div>
      </div>
      <div>{props.children}</div>
    </React.Fragment>
  );
};

export default Theme;
