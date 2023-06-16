import React, { useState } from "react";
import client from "../../../util/baseUrl";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { receiveToken, receiveKeyCategory } from "../../../store/token";

import "../list.css";

const Category = (props) => {
  const { informationCategory, active, changeStatus } = props;
  const keyCategory = useSetRecoilState(receiveKeyCategory);

  function activeCategory() {
    changeStatus(informationCategory.id);
    // nhận id từ đây để chuyển sang products
    keyCategory(informationCategory.id);
  }
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
