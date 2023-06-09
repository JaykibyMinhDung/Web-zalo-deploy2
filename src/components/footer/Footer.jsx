import React from "react";
import { Disclosure } from "@headlessui/react";
import { NavLink } from "react-router-dom";

import { ReactComponent as PageHome } from "../../icon/iconhome.svg";
import { ReactComponent as ListIcon } from "../../icon/iconlist.svg";
import { ReactComponent as CartIcon } from "../../icon/cartIcon.svg";
import { ReactComponent as ChatText } from "../../icon/chatText.svg";
import { ReactComponent as User } from "../../icon/user.svg";

import "./footer.css";

const navigation = [
  { name: "Trang chủ", href: "#", current: false, icon: <PageHome /> },
  {
    name: "Danh mục",
    href: "/list",
    current: false,
    icon: <ListIcon />,
  },
  { name: "Giỏ hàng", href: "#z", current: false, icon: <CartIcon /> },
  { name: "Tin nhắn", href: "#", current: false, icon: <ChatText /> },
  { name: "Cá nhân", href: "#", current: false, icon: <User /> },
];

function classNames(...classes) {
  // item.current
  //   ? "bg-slate-50 text-amber-500 "
  //   : " text-black hover:bg-slate-50 hover:text-amber-500",

  return classes.filter(Boolean).join(" ");
}

const Footer = () => {
  return (
    <Disclosure
      as="nav"
      className=" drop-shadow-4xl absolute top-full bg-slate-50"
    >
      <>
        <div className="mx-auto w-screen px-2 sm:px-6 lg:px-8">
          <div className="relative mx-8 flex items-center justify-between">
            {navigation.map((item) => (
              // icon
              <div className="flex-col text-center">
                <NavLink
                  key={item.name}
                  to={item.href}
                  // className={classNames(
                  //   "rounded-md px-3 text-sm font-medium, hover:text-amber-500"
                  // )}
                  style={({ isActive, isPending }) => {
                    return {
                      color: isActive ? "black" : "rgb(245 158 11)",
                    };
                  }}
                  aria-current={item.current ? "page" : undefined}
                >
                  <p className="svg ml-3.5 ">{item.icon}</p>
                  {/* hover:bg-slate-50 hover:text-amber-500, */}
                  {item.name}
                </NavLink>
              </div>
            ))}
            {/* Drop box  */}
          </div>
        </div>
      </>
    </Disclosure>
  );
};

export default Footer;

// ({ isActive, isPending }) =>
// isPending
//   ? "pending"
//   : isActive
//   ? "text-black hover:bg-slate-50 hover:text-amber-500"
//   : "bg-slate-50 text-amber-500";
