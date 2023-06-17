import React, { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { NavLink } from "react-router-dom";

//component
import Cart from "../../cart/Cart";
import Popup from "../../ListShop/Modal/Modal";

// css
import "./footer.css";

const ButtonFooter = () => {
  return (
    <div>
      <NavLink
        key={item.name}
        to={item.href}
        // flex-col
        style={({ isActive, isPending }) => {
          return {
            color: isActive ? "#f67227" : "black",
          };
        }}
        aria-current={item.current ? "page" : undefined}
      >
        {item.icon}
        {/* <p className="svg ml-3.5">{item.icon}</p> */}
        {item.name}
      </NavLink>
    </div>
  );
};

export default ButtonFooter;
