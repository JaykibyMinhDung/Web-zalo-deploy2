import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { useMutation, useQuery, useQueryClient } from "react-query";

// svg
import { ReactComponent as HomeIcon } from "../../icon/iconhome.svg";

// Component
import Option from "../home/header/Option";
import {
  receiveKeyCategory,
  searchProductsRecoil,
  firstProducts,
} from "../../store/recoil_store";
import { SEARCH_PRODUCTS } from "../../constants/queryKeys";
import { searchProducts } from "../../api/api";

// import Style from "./list.css";
import "./list.css";

const HeaderShop = () => {
  // reactHook
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  // state, data
  const [searchProduct, setSearchProduct] = useState("");
  const keyCategory = useSetRecoilState(receiveKeyCategory);
  // const ProductCategoryFirst = useRecoilValue(firstProducts);
  const SearchProducts = useSetRecoilState(searchProductsRecoil);

  // request api
  const datafirst = useMutation({
    mutationFn: (key) => searchProducts(key),
    onSuccess: (data) => {
      SearchProducts(data);
      // keyWordCategory(data2.data);
      queryClient.invalidateQueries({
        queryKey: [SEARCH_PRODUCTS],
      });
    },
    onError: (err) => {
      console.log(err);
    },
  });

  //function
  const inputSearch = (event) => {
    // console.log("Header");
    setSearchProduct(event.target.value);
  };
  const searchProductHandle = () => {
    datafirst.mutate(searchProduct);
    setSearchProduct("");
  };

  const BackHome = () => {
    keyCategory("");
    SearchProducts("");
    navigate("/");
  };

  return (
    <React.Fragment>
      <div className="relative p-3 flex items-center gap-4 justify-around bg-orange-navbar textPlaceholde">
        <HomeIcon
          className="sm:w-14 sm:h-10 w-1/5 cursor-pointer"
          color={"#fff"}
          onClick={BackHome}
        />
        <div className="flex w-full sm:w-2/4 relative">
          <input
            className="bg-search-white outline-none w-full placeholder:text-xs rounded-2xl placeholder:text-center text-center pl-6 py-1"
            onChange={inputSearch}
            type="text"
            value={searchProduct}
            placeholder="Tìm kiếm sản phẩm"
          />
          <div className="absolute left-3 top-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              onClick={searchProductHandle}
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
        </div>
        <Option />
      </div>
    </React.Fragment>
  );
};

export default React.memo(HeaderShop);

// const addMutation = useMutation({
//   mutationFn: (add) =>
//     client.get(
//       `api/loyalty-app/sell/list-product?page=1&${
//         add ? `search[category_id]=${add}&` : ""
//       }pageLimit=50&filter_sort=price_asc`,
//       {
//         headers: {
//           Authorization: "Bearer " + token2,
//         },
//       }
//     ),
//   onSuccess: (data2) => {
//     console.log(data2);
//     // console.log("Products");
//     keyWordCategory(data2.data);
//     queryClient.invalidateQueries({
//       queryKey: ["productsData"],
//     });
//   },
//   onError: (err) => {
//     console.log(err);
//   },
// });
