import React, { useState } from "react";
import client from "../../../util/baseUrl";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { useMutation, useQuery, useQueryClient } from "react-query";

import {
  receiveToken,
  receiveKeyCategory,
  autoRestartProduct,
} from "../../../store/token";

import "../list.css";

const Category = (props) => {
  const { informationCategory, active, changeStatus } = props;
  const token2 = useRecoilValue(receiveToken);
  const queryClient = useQueryClient();
  // cài lại category
  const keyWordCategory = useSetRecoilState(receiveKeyCategory);
  // const setAutoProducts = useRecoilValue(autoRestartProduct); // Sau đó được chuyển về đây

  // hàm này chạy trước khi thằng number chạy, khi chạy lần 2 nó mới đổi
  // const { isLoading, error, data, isFetching } = useQuery({
  //   queryKey: ["productsData"],
  //   queryFn: () =>
  //     client
  //       .get(
  //         `api/loyalty-app/sell/list-product?page=1&&pageLimit=50&filter_sort=price_asc`,
  //         {
  //           headers: {
  //             Authorization: "Bearer " + token2,
  //           },
  //         }
  //       )
  //       .then((res) => {
  //         return res.data;
  //       }),
  // });

  const addMutation = useMutation({
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
      console.log(data2);
      // console.log("Products");
      keyWordCategory(data2.data);
      queryClient.invalidateQueries({
        queryKey: ["productsData"],
      });
    },
    onError: (err) => {
      console.log(err);
    },
  });

  async function activeCategory() {
    changeStatus(informationCategory.id);
    // nhận id từ đây để chuyển sang products
    // keyWordCategory(informationCategory.id);
    addMutation.mutate(informationCategory.id); // Truyền id để reset lại trạng thái
    console.log("Category");
  }

  // if (isLoading) return <div>loading...</div>; // dòng này cũng không hiện

  // if (error) return "An error has occurred: " + error.message;

  return (
    <div
      onClick={activeCategory}
      className={
        "adr-300:h-28 galaxyFold-280:h-5.5rem p-1 cards " +
        (active === informationCategory.id ? "list__categoria--active" : "")
      }
    >
      {!informationCategory && <div>Loadding...</div>}
      {informationCategory && (
        <>
          <div className="background__images">
            <img
              src={informationCategory.picture}
              alt="error"
              width={"100%"}
              loading="lazy"
            />
          </div>
          <p>{informationCategory.name}</p>
        </>
      )}
    </div>
  );
};

export default Category;
