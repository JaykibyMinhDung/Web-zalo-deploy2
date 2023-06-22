import React, { useState } from "react";

import { VND } from "../../../util/convertMoney";

import "./checkout.css";
import { useQuery } from "react-query";

const CheckOut = (props) => {
  // state
  const [number, setNumber] = useState(0);
  const [onClickStyle, setonClickStyle] = useState(null);
  const { ProductWillBuy, onClose, functionCheckOut } = props;
  const chooseStye = (nameType) => {
    setonClickStyle(nameType);
  };

  // request api

  // const {data, isLoading} = useQuery([], )

  // function
  const BuyCart = () => {
    console.log(functionCheckOut);
  };
  const plus = () => {
    setNumber(number + 1);
  };
  const minus = () => {
    if (number > 1) {
      setNumber(number - 1);
    }
  };

  return (
    <div className="checkout__modal">
      <header>
        <img
          src={ProductWillBuy.product_image}
          alt=""
          className="object-cover object-center"
        />
        <div>
          <p>{ProductWillBuy.name}</p>
          <p style={{ color: "#f67227" }}>{VND.format(ProductWillBuy.price)}</p>
          <del style={{ color: "#808080" }}>
            {VND.format(ProductWillBuy.price_promotion)}
          </del>
        </div>
        <button onClick={onClose}>X</button>
      </header>
      <hr />
      <main>
        <p>Chọn màu sắc ({ProductWillBuy.variations.length} màu sắc)</p>
        <div className="colorClothes">
          {ProductWillBuy.variations &&
            ProductWillBuy.variations.map((e, index) => (
              <button
                onClick={() => chooseStye(e.name)}
                className={
                  onClickStyle === e.name ? "checkout__modal--Active" : ""
                }
                key={ProductWillBuy.product_id}
              >
                {e.name}
              </button>
            ))}
          {/* <button>Hồng nấu</button>
          <button>Xanh két</button>
          <button>Biển đậm</button> */}
        </div>
        <p>Chọn kích thước ({ProductWillBuy.size?.length} kích thước)</p>
        <div className="sizeClothes">
          {ProductWillBuy.size &&
            ProductWillBuy.size.map((e, index) => (
              <button
                onClick={chooseStye}
                className={onClickStyle ? "checkout__modal--Active" : ""}
                key={index}
              >
                {e.size}
              </button>
            ))}
          {/* <button>M</button>
          <button>L</button>
          <button>XL</button> */}
        </div>
        {/* <p>Chọn chất liệu(1 chất liệu)</p>
        <div>
          <button>Cotton</button>
        </div>
        <p>Chọn kiểu dáng (1 kiểu dáng)</p>
        <div>
          <button>Áo cộc-quần sooc</button>
        </div> */}
        <div className="amountClothes">
          <p>Số lượng</p>
          <div style={{ border: "1px solid #f67227" }}>
            <button onClick={minus}>
              <i className="fa fa-minus" aria-hidden="true"></i>
            </button>
            <span>{number}</span>
            <button onClick={plus}>
              <i className="fa fa-plus" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </main>
      <footer>
        <button onClick={BuyCart}>Xác nhận</button>
      </footer>
    </div>
  );
};

export default CheckOut;
