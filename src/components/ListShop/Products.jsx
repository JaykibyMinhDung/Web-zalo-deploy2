import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useMutation, useQuery, queryClient } from "react-query";
import { useRecoilValue, useSetRecoilState } from "recoil";
import client from "../../util/baseUrl";
import {
  receiveToken,
  receiveKeyCategory,
  autoRestartProduct,
} from "../../store/token";
import "./products.css";

const Products = (props) => {
  const keyWordCategory = useRecoilValue(receiveKeyCategory);
  // const setAutoForProducts = useSetRecoilState(autoRestartProduct); // Hàm này sẽ chạy mỗi lần click
  // const [valueTest, setValueTest] = useState(null);
  const token2 = useRecoilValue(receiveToken);
  // Nhận giá trị của category
  const VND = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    currencyDisplay: "code",
  });

  console.log(keyWordCategory);

  return (
    <div className="relative  top-44 bg-white">
      <div className="mx-auto  px-4 py-8 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 xl:gap-x-8">
          {keyWordCategory &&
            keyWordCategory.data.map((e) => (
              // height full
              <Link
                to="/detail"
                className="group p-3 border h-full"
                key={e.product_id}
              >
                {/* height h-full */}
                <div className="relative aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 border">
                  <div className="absolute top-0 left-0 text-white p-2 bg-orange-navbar rounded-ss rounded-ee-lg">
                    -{e.price}
                  </div>

                  <div>
                    {/* height width h-64*/}
                    <img
                      src={e.product_image}
                      alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                      className="h-56 w-full object-cover object-center group-hover:opacity-75"
                      loading="lazy"
                    />
                  </div>
                </div>
                <h3 className="products__title">{e.name}</h3>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="products__price">{VND.format(e.price)}</p>
                  </div>
                  <div className="mt-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="rgb(255, 102, 0)"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7 14h-5v5h-4v-5h-5v-4h5v-5h4v5h5v4z" />
                    </svg>
                  </div>
                </div>
                <del style={{ fontSize: "small", color: "rgb(201, 201, 201)" }}>
                  {VND.format(e.price)}
                </del>
              </Link>
            ))}
          {/*  More products...  */}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Products);

// console.log(data.data); // nhưng data là data cũ, có nghĩa là hàm useQuery không chạy khi chuyển số
// console.log(keyCategory, isLoading); // lấy được số rồi
