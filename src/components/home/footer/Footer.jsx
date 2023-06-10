import React from "react";
import { Disclosure } from "@headlessui/react";
import { NavLink } from "react-router-dom";

import { ReactComponent as PageHome } from "../../../icon/iconhome.svg";
import { ReactComponent as ListIcon } from "../../../icon/iconlist.svg";
import { ReactComponent as CartIcon } from "../../../icon/cartIcon.svg";
import { ReactComponent as ChatText } from "../../../icon/chatText.svg";
import { ReactComponent as User } from "../../../icon/user.svg";

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
      className=" drop-shadow-4xl relative bottom-0 bg-slate-50"
    >
      <>
        <div className="mx-auto w-screen h-auto px-2 sm:px-6 lg:px-8 font-sans">
          <div className="relative mx-px flex items-center justify-between">
            {navigation.map((item) => (
              <div className=" text-center alignSvg">
                <NavLink
                  key={item.name}
                  to={item.href}
                  // flex-col
                  style={({ isActive, isPending }) => {
                    return {
                      color: isActive ? "black" : "#f67227",
                    };
                  }}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.icon}
                  {/* <p className="svg ml-3.5">{item.icon}</p> */}
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
