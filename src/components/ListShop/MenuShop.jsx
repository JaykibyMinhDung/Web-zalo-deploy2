import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import client from "../../util/baseUrl";
import { useQuery } from "react-query";
import { useRecoilValue } from "recoil";
import { receiveToken } from "../../store/token";

// Import Swiper styles
import "swiper/css";
import "./list.css";
import Category from "./CategoryProducts/Category";

const MenuShop = () => {
  // const [productCategory, setProductCategory] = useState(); // get data
  const [checked, setChecked] = useState(null);

  const token2 = useRecoilValue(receiveToken);

  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ["ProductsMenu"],
    queryFn: () =>
      client
        .get("/api/loyalty-app/product-category?strSearch=&is_suggest=1", {
          headers: {
            Authorization: "Bearer " + token2,
          },
        })
        .then((res) => {
          console.log(".......................Menushop");
          return res.data;
        }),
  });

  if (isLoading) {
    return <h2>Loadding...</h2>;
  }
  return (
    <Swiper
      className="bg-gray-100 distanceCards w-full h-full box-border"
      spaceBetween={10}
      slidesPerView={5}
      // onSlideChange={() => console.log("slide change")}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      {data.data.map((product) => (
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
