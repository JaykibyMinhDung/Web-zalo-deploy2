import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import client from "../../util/baseUrl";
import { useRecoilValue } from "recoil";
import { receiveToken } from "../../store/token";

// Import Swiper styles
import "swiper/css";
import "./list.css";
import Category from "./CategoryProducts/Category";

const MenuShop = () => {
  const [productCategory, setProductCategory] = useState();
  const [checked, setChecked] = useState(null);

  const token2 = useRecoilValue(receiveToken);
  const getDataCategory = async () => {
    client
      .get("/api/loyalty-app/product-category?strSearch=&is_suggest=1", {
        headers: {
          Authorization: "Bearer " + token2,
        },
      })
      .then((response) => {
        console.log(response);
        return setProductCategory(response.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getDataCategory();
  }, []);

  if (!productCategory) {
    return <h2>Loadding...</h2>;
  }
  return (
    <Swiper
      className="bg-gray-100 distanceCards w-full h-full box-border"
      spaceBetween={10}
      slidesPerView={5}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {productCategory.data.map((product) => (
        <SwiperSlide key={product.id}>
          <Category
            informationCategory={product}
            key={product.id}
            active={checked}
            changeStatus={setChecked}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MenuShop;
