import React from "react";
import { useNavigate } from "react-router-dom";

// Component
import Option from "../../components/home/header/Option";

// import Style from "./list.css";
import "./headerspg.css";

const HeadersPage = (props) => {
  const navigate = useNavigate();
  const BackHome = () => {
    navigate("/");
  };
  return (
    <React.Fragment>
      <div
        onClick={BackHome}
        className="relative p-3 flex items-center gap-4 justify-between bg-orange-navbar head__page"
      >
        {<props.icon />}
        <div className="flex w-full sm:w-2/4 relative">{props.title}</div>
        <Option />
      </div>
    </React.Fragment>
  );
};

export default React.memo(HeadersPage);
