import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as CrowIcon } from "../../../icon/crown-svgrepo-com.svg";
import { ReactComponent as GiftIcon } from "../../../icon/giftboild.svg";
import { ReactComponent as CartIcon } from "../../../icon/cartboild.svg";
import { ReactComponent as DocumentIcon } from "../../../icon/documents-check.svg";

const MainHome = () => {
  return (
    <main className=" w-full h-full">
      <div
        style={{ fontSize: "small" }}
        // top-64
        className="absolute left-0 md:left-24 lg:left-20% 2xl:left-96 top-30vh md:top-2/4 w-full md:w-4/5 lg:w-3/5 h-60 rounded-3xl bg-white font-sans"
      >
        {/* Menu */}
        <div className="flex flex-nowrap justify-between text-center mx-3 ml-4 md:mx-8 mt-8">
          <NavLink to="#">
            <span className="inline-flex items-center rounded-full bg-red-50 px-2 py-1 text-xs font-medium text-orange-navbar ring-1 ring-inset ring-red-600/10">
              <CartIcon className="w-7 sm:w-14" />
            </span>
            <p className="w-20 sm:w-20">Mua hàng</p>
          </NavLink>
          <NavLink to="">
            <span class="inline-flex items-center rounded-full bg-red-50 px-2 py-1 text-xs font-medium text-orange-navbar ring-1 ring-inset ring-red-600/10">
              <GiftIcon className="w-7 sm:w-14" />
            </span>
            <p className="w-20 sm:w-20">Ưu đãi</p>
          </NavLink>
          <NavLink to="#">
            <span class="inline-flex items-center rounded-full bg-red-50 px-2 py-1 text-xs font-medium text-orange-navbar ring-1 ring-inset ring-red-600/10">
              <CrowIcon className="w-7 sm:w-14" />
            </span>
            <p className="w-20 sm:w-20">Quyền lợi</p>
          </NavLink>
          <NavLink to="#">
            <span class="inline-flex items-center rounded-full bg-red-50 px-2 py-1 text-xs font-medium text-orange-navbar ring-1 ring-inset ring-red-600/10">
              <DocumentIcon className="w-7 sm:w-14" />
            </span>
            <p className="w-20 sm:w-20">Lịch sử </p>
          </NavLink>
        </div>
      </div>
    </main>
  );
};

export default MainHome;
