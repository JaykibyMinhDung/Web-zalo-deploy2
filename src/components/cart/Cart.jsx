import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";

// svg, image
import { ReactComponent as ExitIcon } from "../../icon/ExitIcon.svg";

// component
import { VND } from "../../util/convertMoney";

// css
import "./cart.css";

const Cart = () => {
  const [number, setNumber] = useState(0);
  const navigate = useNavigate();
  const [onClickStyle, setonClickStyle] = useState(false);
  const chooseStye = () => {
    navigate("/");
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
    <div className="Cart">
      <header>
        <b>Giỏ hàng</b>
        <div onClick={chooseStye}>
          <ExitIcon />
        </div>
      </header>
      <hr />
      <main>
        <div className="main__cart">
          <div>
            <div>
              <p>Chi tiết đơn hàng ({1})</p>
              <div className="productImg">
                <img
                  src="https://newcdn.onshop.asia/images/narylee/bo-ni-bong-hinh-tho-cute-de-thuong.jpg"
                  alt=""
                />
                <div>
                  <p>Đầm linen dài sát nách</p>
                  <p>SFB3012</p>
                </div>
              </div>
            </div>
            <div className="priceCart">
              <button style={{ color: "red" }}>Xóa hết</button>
              <div>
                <p>429.000đ</p>
                <del>429.000đ</del>
              </div>
              <div className="amountClothes2">
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
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div>
          <p>Tổng thanh toán:</p>
          <p style={{ fontWeight: "650" }}>{VND.format(429000)}</p>
        </div>
        <button>Thanh toán ngay . 1 sản phẩm</button>
      </footer>
    </div>
  );
};

export default Cart;
