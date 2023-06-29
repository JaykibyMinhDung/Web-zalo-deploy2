import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as CrowIcon } from "../../../icon/crown-svgrepo-com.svg";
import { ReactComponent as GiftIcon } from "../../../icon/giftboild.svg";
import { ReactComponent as CartIcon } from "../../../icon/cartboild.svg";
import { ReactComponent as DocumentIcon } from "../../../icon/documents-check.svg";

const mainHomeArr = [
  {
    title: "Lịch dạy PT",
    icon: <CartIcon className="w-7 sm:w-14" style={{ color: "#f67227" }} />,
    href: "/classpt",
  },
  {
    title: "Ưu đãi",
    icon: <GiftIcon className="w-7 sm:w-14" style={{ color: "#f67227" }} />,
    href: "/sale",
  },
  {
    title: "Shipping",
    icon: <CrowIcon className="w-7 sm:w-14" />,
    href: "/transform",
  },
  {
    title: "Lịch yoga",
    icon: <DocumentIcon className="w-7 sm:w-14" />,
    href: "/yoga",
  },
];

const MainHome = () => {
  return (
    <main className=" w-full h-full">
      <div
        style={{ fontSize: "small" }}
        // top-64
        className="absolute left-0 adr-300:top-30vh iphone-se:top-31.8vh iphone-xr:top-30vh md:left-24 lg:left-20% 2xl:left-96 top-33vh md:top-2/4 w-full md:w-4/5 lg:w-3/5 rounded-3xl bg-white font-sans"
      >
        {/* Menu */}
        <div className="flex flex-nowrap justify-between text-center mx-3 ml-4 md:mx-8 mt-8">
          {mainHomeArr.map((e) => (
            <NavLink key={e.title} to={e.href}>
              <span className="inline-flex items-center rounded-full border-0 px-2 py-1 text-xs font-medium text-orange-navbar ring-1 ring-inset ring-red-600/10">
                {/* bg-red-50 */}
                {e.icon}
              </span>
              <p className="w-20 sm:w-20">{e.title}</p>
            </NavLink>
          ))}
        </div>
      </div>
    </main>
  );
};

export default MainHome;
