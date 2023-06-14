import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../list.css";

const Category = (props) => {
  const [changeCards, setChangeCards] = useState(false);
  const { informationCategory } = props;
  //   const [test, setTest] = useState(informationCategory.topic);

  //   const OldTopic = localStorage.getItem("topic");

  function activeCategory() {
    if (!changeCards) {
      setChangeCards(true);
      //   localStorage.setItem("topic", informationCategory.topic);
    }
    // if (OldTopic !== informationCategory.topic) {
    if (changeCards) {
      setChangeCards(false);
    }
    // console.log(informationCategory.topic);
  }
  return (
    <div
      onClick={activeCategory}
      className={
        "h-28 p-1 cards " + (changeCards ? "list__categoria--active" : "")
      }
    >
      <div className="background__images">
        <img
          src={informationCategory.imageUrl}
          alt="error"
          width={"100%"}
          loading="lazy"
        />
      </div>
      <p>{informationCategory.topic}</p>
    </div>
  );
};

export default Category;
