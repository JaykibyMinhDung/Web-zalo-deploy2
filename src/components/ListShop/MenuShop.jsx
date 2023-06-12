import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "./list.css";
import Category from "./CategoryProducts/Category";

const MenuShop = (props) => {
  return (
    <Swiper
      className="bg-gray-100 distanceCards w-full h-full box-border"
      spaceBetween={10}
      slidesPerView={5}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {props.products.map((product) => (
        <SwiperSlide>
          <Category informationCategory={product} id={product.id} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MenuShop;
