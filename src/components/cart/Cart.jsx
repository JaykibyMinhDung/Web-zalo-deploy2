import React, { useState } from "react";
import { ReactComponent as ExitIcon } from "../../icon/ExitIcon.svg";
import "./cart.css";

const Cart = () => {
  const [number, setNumber] = useState(0);
  const [onClickStyle, setonClickStyle] = useState(false);
  const chooseStye = () => {
    if (onClickStyle) {
      setonClickStyle(false);
    }
    if (!onClickStyle) {
      setonClickStyle(true);
    }
  };
  const plus = () => {
    setNumber(number + 1);
  };
  const minus = () => {
    if (number > 1) {
      setNumber(number - 1);
    }
  };

  const VND = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    currencyDisplay: "code",
  });
  return (
    <div className="Cart">
      <header>
        <b>Giỏ hàng</b>
        <div>
          <ExitIcon />
        </div>
      </header>
      <hr />
      <main>
        <div className="main__cart">
          <div>
            <p>Chi tiết đơn hàng ({1})</p>
            <div>
              <img
                src="https://newcdn.onshop.asia/images/narylee/bo-ni-bong-hinh-tho-cute-de-thuong.jpg"
                alt=""
              />
              <div>
                <p>Đầm linen dài sát nách</p>
                <p>SFB3012</p>
              </div>
            </div>
            <div>
              <button>Xóa hết</button>
              <div>
                <p>429.000đ</p>
                <del>429.000đ</del>
              </div>
              <div>
                <div style={{ border: "1px solid #f67227" }}>
                  <button onClick={minus}>
                    <i class="fa fa-minus" aria-hidden="true"></i>
                  </button>
                  <span>{number}</span>
                  <button onClick={plus}>
                    <i class="fa fa-plus" aria-hidden="true"></i>
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
          <p>429.000đ</p>
        </div>
        <button>Xác nhận</button>
      </footer>
    </div>
  );
};

export default Cart;
