import React from "react";
import { ReactComponent as HomeIcon } from "../../icon/iconhome.svg";
import Option from "../header/Option";
import { useNavigate } from "react-router-dom";

const HeaderShop = () => {
  const navigate = useNavigate();

  const BackHome = () => {
    navigate("/");
  };
  return (
    <React.Fragment>
      <div className=" relative p-5 flex items-center gap-4 justify-around bg-orange-navbar">
        <HomeIcon
          className="sm:w-14 sm:h-10 w-1/5 ml-2 cursor-pointer"
          color={"#fff"}
          onClick={BackHome}
        />
        <div className="flex w-full sm:w-2/4 relative">
          <input
            className=" outline-none w-full placeholder:text-xs rounded-2xl placeholder:text-center text-center pl-4 p-2"
            type="text"
            value=""
            placeholder="Tìm kiếm theo tên sản phẩm"
          />
          <div className="absolute left-1 top-2">
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
