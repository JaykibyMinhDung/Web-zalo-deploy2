import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery, queryClient } from "react-query";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

// Component, data
import {
  receiveToken,
  productDetail,
  receiveKeyCategory,
  firstProducts,
  resetLoading,
  searchProductsRecoil,
} from "../../store/recoil_store";
import client from "../../util/baseUrl";
import DefaultImage from "../../images/default.jpg";
// import Loading from "../sninner_loading/Sninner";
import { VND } from "../../util/convertMoney";
import NotfoundPage from "../../images/product_not_found2.png";
import ImageWhite from "../sninner_loading/loadingImage/ImageWhite";

// css
import "./products.css";

const Products = (props) => {
  // reactHook
  const navigate = useNavigate();
  const [firstDataCategory, setfirstDataCategory] = useState([]);
  const [loadingProducts, setLoadingProducts] = useRecoilState(resetLoading);

  //data, state
  const token2 = useRecoilValue(receiveToken);
  const keyWordCategory = useRecoilValue(receiveKeyCategory);
  const ProductCategoryFirst = useRecoilValue(firstProducts);
  const ShowProductHasSearch = useRecoilValue(searchProductsRecoil);
  // const resetLoad = useRecoilValue(resetLoading);
  const Detail = useSetRecoilState(productDetail);

  // request api
  const takeInformation = async (variation_id, branch_id, unit_id) => {
    // setLoadingProducts(false);

    // Viết dạng promise để sửa lỗi những chưa sửa được bug cứ mỗi làn reload lại nó sẽ không vào được detail lần đầu
    let myPromise = new Promise(function (myResolve, myReject) {
      myResolve(
        Detail({
          variation_id,
          branch_id,
          unit_id,
        })
      );
    });
    await myPromise;
    return navigate(`/detail/${variation_id}`);
  };

  const firstViewProducts = useMutation({
    mutationFn: (add) =>
      client.get(
        `api/loyalty-app/sell/list-product?page=1&${
          add ? `search[category_id]=${add}&` : ""
        }pageLimit=50&filter_sort=price_asc`,
        {
          headers: {
            Authorization: "Bearer " + token2,
          },
        }
      ),
    onSuccess: (data2) => {
      setfirstDataCategory(data2.data.data);
      setLoadingProducts(false);
      // queryClient.invalidateQueries({
      //   queryKey: ["productsData"],
      // });
    },
    onError: (err) => {
      console.log(err);
    },
  });

  // functions
  useEffect(() => {
    if (!keyWordCategory && ProductCategoryFirst) {
      firstViewProducts.mutate(ProductCategoryFirst.id);
    }
  }, [keyWordCategory, ProductCategoryFirst]);

  // loading and lazy load
  if (!keyWordCategory && loadingProducts) {
    return (
      // <div style={{ position: "absolute", top: "35%", left: "30%" }}>
      <div style={{ position: "absolute", top: "30%" }}>
        {/* <Loading /> */}
        <ImageWhite />
      </div>
    );
  }

  const EmptyProduct = (
    <div>
      <img src={NotfoundPage} alt="" />
    </div>
  );

  const showProducts = () => {
    if (ShowProductHasSearch) {
      return ShowProductHasSearch.map((e) => componentGenrelly(e));
    }
    if (!keyWordCategory) {
      return firstDataCategory.length > 1
        ? firstDataCategory.map((e) => componentGenrelly(e))
        : EmptyProduct;
    }
    if (keyWordCategory) {
      return keyWordCategory.data.length > 1
        ? keyWordCategory.data.map((e) => componentGenrelly(e))
        : EmptyProduct;
    }
  };

  const componentGenrelly = (e) => {
    return (
      <div
        // to="/detail"
        className="group p-3 border h-full"
        key={e.product_id}
        onClick={() => takeInformation(e.variation_id, e.branch_id, e.unit_id)}
      >
        <div className="relative aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 border">
          <div className="absolute top-0 left-0 text-white p-2 bg-orange-navbar rounded-ss rounded-ee-lg">
            -{e.price}
          </div>

          <div>
            <img
              src={e.product_image ? e.product_image : DefaultImage}
              alt=""
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
      </div>
    );
  };
  return (
    <div className="relative top-44 bg-white">
      <div className="mx-auto px-4 py-8 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>
        <div
          className={
            (firstDataCategory.length > 1 && keyWordCategory === null) ||
            (firstDataCategory.length > 1 &&
              keyWordCategory &&
              keyWordCategory.data.length < 1)
              ? "text-center"
              : "grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 xl:gap-x-8"
          }
        >
          {showProducts()}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Products);

// console.log(data.data); // nhưng data là data cũ, có nghĩa là hàm useQuery không chạy khi chuyển số
// console.log(keyCategory, isLoading); // lấy được số rồi
