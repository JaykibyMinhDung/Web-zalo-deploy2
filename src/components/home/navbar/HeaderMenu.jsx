import React from "react";
import { ReactComponent as StartIcon } from "../../../icon/star.svg";
import { ReactComponent as GiftIcon } from "../../../icon/gift.svg";
import { ReactComponent as CartIcon } from "../../../icon/cartIcon.svg";
import { ReactComponent as ContactIcon } from "../../../icon/contact.svg";

const HeaderMenu = () => {
  return (
    <div className=" w-full h-full">
      <div
        style={{ fontSize: "small" }}
        className="absolute left-6 md:left-24 lg:left-20% 2xl:left-96 top-24 md:top-52 w-90% md:w-4/5 lg:w-3/5 h-36 md:h-60 drop-shadow-6xl rounded-3xl bg-white z-10 font-sans"
      >
        <input
          type="text"
          className="w-full h-1/5 border-b-2 text-center outline-0 rounded-t-3xl"
        />
        {/* Menu */}
        <div className="flex flex-nowrap justify-between text-center mx-2 mt-8">
          <div>
            <span class="inline-flex items-center rounded-full bg-red-50 px-2 py-1 text-xs font-medium text-orange-navbar ring-1 ring-inset ring-red-600/10">
              <StartIcon className="w-7 sm:w-14" />
            </span>
            <p className="w-18 sm:w-20">Tích điểm</p>
          </div>
          <div>
            <span class="inline-flex items-center rounded-full bg-red-50 px-2 py-1 text-xs font-medium text-orange-navbar ring-1 ring-inset ring-red-600/10">
              <GiftIcon className="w-7 sm:w-14" />
            </span>
            <p className="w-18 sm:w-20">Đổi thưởng</p>
          </div>
          <div>
            <span class="inline-flex items-center rounded-full bg-red-50 px-2 py-1 text-xs font-medium text-orange-navbar ring-1 ring-inset ring-red-600/10">
              <CartIcon className="w-7 sm:w-14" />
            </span>
            <p className="w-18 sm:w-20">Đặt hàng</p>
          </div>
          <div>
            <span class="inline-flex items-center rounded-full bg-red-50 px-2 py-1 text-xs font-medium text-orange-navbar ring-1 ring-inset ring-red-600/10">
              <ContactIcon className="w-7 sm:w-14" />
            </span>
            <p className="w-18 sm:w-20">Liên hệ</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMenu;
