import React, { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { NavLink } from "react-router-dom";

// svg
import { ReactComponent as PageHome } from "../../../icon/iconhome.svg";
import { ReactComponent as ListIcon } from "../../../icon/iconlist.svg";
import { ReactComponent as CartIcon } from "../../../icon/cartIcon.svg";
// import { ReactComponent as ChatText } from "../../../icon/chatText.svg";
import { ReactComponent as User } from "../../../icon/user.svg";
import { FaRegBell } from "react-icons/fa";
//component

// css
import "./footer.css";

// icon and title footer
const navigation = [
  { name: "Trang chủ", href: "/", current: false, icon: <PageHome /> },
  {
    name: "Danh mục",
    href: "/list",
    current: false,
    icon: <ListIcon />,
  },
  { name: "Giỏ hàng", href: "/cart", current: false, icon: <CartIcon /> },
  {
    name: "Thông báo",
    href: "/notification",
    current: false,
    icon: <FaRegBell className="h-6" />,
  },
  { name: "Cá nhân", href: "/personal", current: false, icon: <User /> },
];

const Footer = () => {
  return (
    <Disclosure
      as="nav"
      className="fixed bottom-0 drop-shadow-4xl bg-slate-50 w-full"
    >
      <>
        <div className=" mx-auto w-screen h-auto px-2 sm:px-6 lg:px-8 font-sans">
          <div className="relative mx-px flex items-center justify-between">
            {/* item.map */}
            {navigation.map((item) => (
              <div className=" text-center alignSvg" key={item.name}>
                <NavLink
                  key={item.name}
                  to={item.href}
                  style={({ isActive, isPending }) => {
                    return {
                      color: isActive ? "#f67227" : "black",
                    };
                  }}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.icon}
                  {item.name}
                </NavLink>
              </div>
            ))}
            {/* {showPopup && (
              <Popup>
                <Cart />
              </Popup>
            )} */}
          </div>
        </div>
      </>
    </Disclosure>
  );
};

export default Footer;
