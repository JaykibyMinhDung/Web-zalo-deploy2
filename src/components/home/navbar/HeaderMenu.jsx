import React from "react";
import { ReactComponent as StartIcon } from "../../../icon/star.svg";
import { ReactComponent as GiftIcon } from "../../../icon/gift.svg";
import { ReactComponent as CartIcon } from "../../../icon/cartIcon.svg";
import { ReactComponent as ContactIcon } from "../../../icon/contact.svg";
import { useNavigate } from "react-router-dom";

const HeaderMenuArr = [
  {
    title: "Thương hiệu",
    icon: <StartIcon className="w-7 sm:w-14" />,
    href: "/brand",
  },
  {
    title: "Bài viết",
    icon: <GiftIcon className="w-7 sm:w-14" />,
    href: "/posts",
  },
  {
    title: "Tin tức",
    icon: <CartIcon className="w-7 sm:w-14" />,
    href: "/news",
  },
  {
    title: "Liên hệ",
    icon: <ContactIcon className="w-7 sm:w-14" />,
    href: "/contact",
  },
];

const HeaderMenu = () => {
  const navigate = useNavigate();
  const navigateHandle = (url) => {
    navigate(url);
  };
  return (
    <div className=" w-full h-full">
      <div
        style={{ fontSize: "small" }}
        className="absolute left-6 md:left-24 lg:left-20% 2xl:left-96 top-13.3vh md:top-52 w-90% md:w-4/5 lg:w-3/5 h-36 md:h-60 drop-shadow-6xl rounded-3xl bg-white z-10 font-sans"
      >
        <input
          type="text"
          className="w-full h-1/5 border-b-2 text-center outline-0 rounded-t-3xl"
        />
        {/* Menu */}
        <div className="flex flex-nowrap justify-between text-center mx-2 mt-8">
          {HeaderMenuArr.map((e) => (
            <div onClick={() => navigateHandle(e.href)} key={e.title}>
              <span className="inline-flex items-center rounded-full bg-red-50 px-2 py-2 text-xs font-medium text-orange-navbar ring-1 ring-inset ring-red-600/10">
                {e.icon}
              </span>
              <p className="w-18 sm:w-20">{e.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeaderMenu;
