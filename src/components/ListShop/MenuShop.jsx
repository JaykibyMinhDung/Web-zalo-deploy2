import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "./list.css";

const MenuShop = (props) => {
  const [changeCards, setChangeCards] = useState(false);
  function hoveractive(event) {
    if (!changeCards) {
      setChangeCards(true);
      console.log(event);
    }
    if (changeCards) {
      setChangeCards(false);
    }
  }
  return (
    <Swiper
      className="bg-gray-100 distanceCards w-full h-full"
      spaceBetween={10}
      slidesPerView={5}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {props.products.map((e) => (
        <SwiperSlide>
          <div
            onClick={hoveractive}
            className={"h-28 p-1 cards " + (changeCards ? "bg-white " : "")}
          >
            <div className="background__images">
              <img src={e.imageUrl} alt="error" width={"90%"} loading="lazy" />
            </div>
            <p>{e.topic}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MenuShop;
