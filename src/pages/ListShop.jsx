import React, { Suspense } from "react";
import "../components/ListShop/list.css";
import HeaderShop from "../components/ListShop/HeaderShop";
import Products from "../components/ListShop/Products";
import MenuShop from "../components/ListShop/MenuShop";
import Loading from "../components/sninner_loading/Sninner";

const ListShop = () => {
  return (
    <React.Fragment>
      {/* <Suspense fallback={<Loading />}> */}
      <div className="relative">
        <div className="list__headershop">
          <HeaderShop />
          <MenuShop />
        </div>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Products />
      </Suspense>
    </React.Fragment>
  );
};

export default React.memo(ListShop);
