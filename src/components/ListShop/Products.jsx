import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useQuery } from "react-query";
import { useRecoilValue } from "recoil";
import client from "../../util/baseUrl";
import { receiveToken, receiveKeyCategory } from "../../store/token";
import "./products.css";

const Products = (props) => {
  const keyCategory = useRecoilValue(receiveKeyCategory);
  const [valueTest, setValueTest] = useState(null);
  const token2 = useRecoilValue(receiveToken);
  // Nhận giá trị của category
  const VND = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    currencyDisplay: "code",
  });
  /*
  2 lỗi sai trong reactQuery:
  
  - Không return về giá trị cần trả, hoặc lồng qus nhiều then trong đó
  - Hàm không để là hàm bất đồng bộ
  - Các thành phần bên trong để không bất đồng bộ
  
  */

  function handleButton(event) {
    return setValueTest(2584);
  }
  function handleButton1(event) {
    return setValueTest(246);
  }
  function handleButton2(event) {
    return setValueTest(252);
  }
  function handleButton3(event) {
    return setValueTest(4749);
  }

  // hàm này chạy trước khi thằng number chạy, khi chạy lần 2 nó mới đổi
  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ["productsData"],
    queryFn: () =>
      client
        .get(
          `api/loyalty-app/sell/list-product?page=1&${
            valueTest ? `search[category_id]=${valueTest}&` : ""
          }pageLimit=50&filter_sort=price_asc`,
          {
            headers: {
              Authorization: "Bearer " + token2,
            },
          }
        )
        .then((res) => res.data),
  });

  if (isLoading) return <div>loading...</div>; // dòng này cũng không hiện

  console.log("Products", keyCategory, valueTest);

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="relative  top-44 bg-white">
      <div className="mx-auto  px-4 py-8 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <button onClick={handleButton}>2584</button>
        <br />
        <button onClick={handleButton1}>246</button>
        <br />
        <button onClick={handleButton2}>252</button>
        <br />
        <button onClick={handleButton3}>4749</button>
      </div>
    </div>
  );
};

export default React.memo(Products);

// console.log(data.data); // nhưng data là data cũ, có nghĩa là hàm useQuery không chạy khi chuyển số
// console.log(keyCategory, isLoading); // lấy được số rồi
