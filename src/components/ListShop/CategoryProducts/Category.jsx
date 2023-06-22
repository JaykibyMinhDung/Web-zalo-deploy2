import React, { useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { useMutation, useQuery, useQueryClient } from "react-query";

// component
import client from "../../../util/baseUrl";
import {
  receiveToken,
  receiveKeyCategory,
  resetLoading,
  searchProductsRecoil,
} from "../../../store/recoil_store";

// css
import DefaultImage from "../../../images/default.jpg";
import "../list.css";

const Category = (props) => {
  // reacthook
  const queryClient = useQueryClient();

  // state, data
  const token2 = useRecoilValue(receiveToken);
  const { informationCategory, active, changeStatus } = props;
  const keyWordCategory = useSetRecoilState(receiveKeyCategory);
  const resetProductSearch = useSetRecoilState(searchProductsRecoil);
  const [loadingProducts, resetLoadingCategory] = useRecoilState(resetLoading);

  // console.log(active);
  // request api
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
      keyWordCategory(data2.data);
      queryClient.invalidateQueries({
        queryKey: ["productsData"],
      });
    },
    onError: (err) => {
      console.log(err);
    },
  });

  // function
  async function activeCategoryHandle() {
    // if (!loadingProducts) {
    resetProductSearch(null);
    keyWordCategory(null);
    // }
    resetLoadingCategory(true);
    changeStatus(informationCategory.id);
    // if (active === informationCategory.id) {
    addMutation.mutate(informationCategory.id);
    // }
  }

  return (
    <div
      onClick={activeCategoryHandle}
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
              src={
                informationCategory.picture
                  ? informationCategory.picture
                  : DefaultImage
              }
              alt=""
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

// if (isLoading) return <div>loading...</div>; // dòng này cũng không hiện

// if (error) return "An error has occurred: " + error.message;
