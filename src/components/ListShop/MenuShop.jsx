import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const MenuShop = (props) => {
  return (
    <Swiper
      className="mt-2 w-full"
      spaceBetween={10}
      slidesPerView={5}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {props.products.map((e) => (
        <SwiperSlide>
          <img src={e.imageUrl} alt="error" width={"100%"} loading="lazy" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MenuShop;
