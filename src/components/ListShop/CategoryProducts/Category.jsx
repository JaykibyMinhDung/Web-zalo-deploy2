import React, { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
import client from "../../../util/baseUrl";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { receiveToken, receiveKeyCategory } from "../../../store/token";

import "../list.css";
import { NavLink } from "react-router-dom";

const Category = (props) => {
  const [changeCards, setChangeCards] = useState(false);
  const keyCategoryOld = useRecoilValue(receiveKeyCategory);
  const { informationCategory, id, active, changeStatus } = props;
  const keyCategory = useSetRecoilState(receiveKeyCategory);
  //   const [test, setTest] = useState(informationCategory.topic);

  async function activeCategory() {
    // if (!changeCards) {
    // if (id === informationCategory.id) {
    // setChangeCards(false);
    changeStatus(informationCategory.id);
    keyCategory(informationCategory.id);
    // }
    // }

    if (active) {
      changeStatus(false);
      keyCategory("");
    }
    // return setChangeCards(false);
    // console.log(informationCategory.topic);
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
