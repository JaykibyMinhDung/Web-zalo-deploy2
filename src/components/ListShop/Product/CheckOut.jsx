import React from "react";
import "./checkout.css";

const CheckOut = (props) => {
  const VND = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    currencyDisplay: "code",
  });
  return (
    <div className="checkout__modal">
      <header>
        <img
          src="https://newcdn.onshop.asia/images/narylee/bo-ni-bong-hinh-tho-cute-de-thuong.jpg"
          alt=""
        />
        <div>
          <p>Bộ đồ mặc nhà cotton áo cộc tay quần sooc ST9043</p>
          <p style={{ color: "#f67227" }}>{VND.format(439000)}</p>
        </div>
        '<button onClick={props.onClose}>X</button>
      </header>
      <hr />
      <main>
        <p>Chọn màu sắc (4 màu sắc)</p>
        <div className="colorClothes">
          <button>Tím nhạt</button>
          <button>Hồng nấu</button>
          <button>Xanh két</button>
          <button>Biển đậm</button>
        </div>
        <p>Chọn kích thước (4 kích thước)</p>
        <div className="sizeClothes">
          <button>S</button>
          <button>M</button>
          <button>L</button>
          <button>XL</button>
        </div>
        <p>Chọn chất liệu(1 chất liệu)</p>
        <div>
          <button>Cotton</button>
        </div>
        <p>Chọn kiểu dáng (1 kiểu dáng)</p>
        <div>
          <button>Áo cộc-quần sooc</button>
        </div>
        <div className="amountClothes">
          <p>Số lượng</p>
          <div style={{ border: "thin solid #f67227" }}>
            <button>
              {/* onClick={minus} */}
              <i class="fa fa-plus" aria-hidden="true"></i>
            </button>
            <span className={""}>{0}</span>
            <button>
              {/* onClick={plus} */}
              <i class="fa fa-minus" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </main>
      <footer>
        <button>Xác nhận</button>
      </footer>
    </div>
  );
};

export default CheckOut;
