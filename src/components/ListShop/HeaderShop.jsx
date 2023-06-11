import React from "react";
import { ReactComponent as HomeIcon } from "../../icon/iconhome.svg";
import Option from "../home/header/Option";
import { useNavigate } from "react-router-dom";

// import Style from "./list.css";
import "./list.css";

const HeaderShop = () => {
  const navigate = useNavigate();

  const BackHome = () => {
    navigate("/");
  };
  return (
    <React.Fragment>
      <div className="relative p-3 flex items-center gap-4 justify-around bg-orange-navbar textPlaceholde">
        <HomeIcon
          className="sm:w-14 sm:h-10 w-1/5 cursor-pointer"
          color={"#fff"}
          onClick={BackHome}
        />
        <div className="flex w-full sm:w-2/4 relative">
          <input
            className="bg-search-white outline-none w-full placeholder:text-xs rounded-2xl placeholder:text-center text-center pl-6 py-1"
            type="text"
            value=""
            placeholder="Tìm kiếm sản phẩm"
          />
          <div className="absolute left-3 top-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
        </div>
        <Option />
      </div>
    </React.Fragment>
  );
};

export default HeaderShop;
