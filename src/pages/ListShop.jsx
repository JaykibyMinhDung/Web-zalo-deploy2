import React from "react";
import "../components/ListShop/list.css";
import HeaderShop from "../components/ListShop/HeaderShop";
import Products from "../components/ListShop/Products";
import MenuShop from "../components/ListShop/MenuShop";

const ListShop = () => {
  // console.log(props);
  console.log("listPage");

  return (
    <React.Fragment>
      <>
        <div className="relative">
          <div className="list__headershop">
            <HeaderShop />
            <MenuShop />
          </div>
        </div>
        <Products />
      </>
    </React.Fragment>
  );
};

export default React.memo(ListShop);
