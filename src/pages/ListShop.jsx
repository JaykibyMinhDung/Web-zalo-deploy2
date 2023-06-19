import React from "react";
import "../components/ListShop/list.css";
import HeaderShop from "../components/ListShop/HeaderShop";
import Products from "../components/ListShop/Products";
import MenuShop from "../components/ListShop/MenuShop";

const ListShop = (props) => {
  // console.log(props);
  console.log("listPage");

  return (
    <React.Fragment>
      {!props.lockpage && (
        <>
          <div className="relative">
            <div className="list__headershop">
              <HeaderShop />
              <MenuShop />
            </div>
          </div>
          <Products />
        </>
      )}
    </React.Fragment>
  );
};

export default React.memo(ListShop);
