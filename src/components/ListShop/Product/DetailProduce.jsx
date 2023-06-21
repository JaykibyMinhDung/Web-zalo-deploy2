import React, { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { Slide } from "react-slideshow-image";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";

// component
import {
  productDetail,
  resetLoading,
  searchProductsRecoil,
} from "../../../store/recoil_store";
import { DETAIL_PRODUCT } from "../../../constants/queryKeys";
import Option from "../../home/header/Option";
import Popup from "../Modal/Modal";
import CheckOut from "./CheckOut";
import { VND } from "../../../util/convertMoney";

// svg, image
import { ReactComponent as Chatzalo } from "../../../icon/chatText.svg";
import { getProductDetail } from "../../../api/api";
import { FaChevronLeft } from "react-icons/fa";
import DefaultImage from "../../../images/default.jpg";

//css
import "react-slideshow-image/dist/styles.css";
import "./detail.css";

const DetailProduct = () => {
  //reactHook, defined
  const navigate = useNavigate();

  // state
  const [showPopup, setShowPopup] = useState(false);
  const detailData = useRecoilValue(productDetail);
  const resetLoad = useSetRecoilState(resetLoading);
  const searchProduct = useSetRecoilState(searchProductsRecoil);

  // function app
  const back = () => {
    searchProduct("");
    resetLoad(false);
    navigate("/list");
  };
  const showModal = () => {
    document.body.style.overflow = "hidden";
    return setShowPopup(true);
  };
  const hiddenModal = () => {
    document.body.style.overflow = "auto";
    return setShowPopup(false);
  };

  // request api
  const { data, isFetched, isLoading } = useQuery([DETAIL_PRODUCT], () =>
    getProductDetail(
      detailData.variation_id,
      detailData.unit_id,
      detailData.branch_id
    )
  );

  if (!data && isFetched) {
    return navigate("/list");
  }

  if (isLoading) {
    return <div> Loading... </div>;
  }

  console.log(data.product_image.length);
  // suar condition slideshow, loading
  return (
    <React.Fragment>
      <div onClick={back} className="positive-headers bg-orange-navbar">
        <div className="detail__headers">
          <div className="detail__button--back">
            <FaChevronLeft />
            <p style={{ fontWeight: 520, marginLeft: "0.5rem" }}>
              {" "}
              Chi tiết sản phẩm
            </p>
          </div>
          <Option />
        </div>
      </div>
      <div className="detail__backgroundimage">
        <>
          {Array.isArray(data.product_image) &&
          data.product_image.length > 1 ? (
            <div className="slideshow-container">
              <Slide autoplay={false}>
                {data.product_image.map((slideImage, index) => (
                  <div key={index} className="relative">
                    <img
                      src={slideImage.url ? slideImage.url : DefaultImage}
                      alt=""
                    />
                    <span className="totalImage">
                      {index + 1 + "/" + data.product_image.length}
                    </span>
                  </div>
                ))}
              </Slide>
            </div>
          ) : (
            <img src={data.product_image} alt="lỗi" />
          )}
        </>
        <div style={{ paddingLeft: "1.2rem", paddingTop: "0.5rem" }}>
          <h2>{data.name}</h2>
          <p className="price">{VND.format(data.price)}</p>
        </div>
      </div>

      <div className="detail__background list-[disc] list-inside">
        <div>
          <h3>Chi tiết sản phẩm</h3>
          <h4>MÔ TẢ SẢN PHẨM:</h4>
          <ul>
            <li>Tên sản phẩm: Đồ bộ mặc nhà cotton áo cộc quần sooc</li>
            <li>Chất liệu vải: Cotton</li>
            <li>Số size: S-M-L-XL</li>
            <li>Màu sắc: Xanh két, biến đậm, hồng nâu, tím nhạt</li>
            <li>Thương hiệu: Sunfly</li>
            <li>Xuất xứ: Việt Nam</li>
          </ul>
          <h3>ĐIỂM NHẤN NỐI BẬT:</h3>
          <h4>Chất liệu và tính năng nổi bật của chất liệu: </h4>
          <ul>
            <li>Thành phần: 92% cotton compact, 8% spandex</li>
            <li>
              Ưu điểm của chất liệu: bề mặt mượt mà, hạn chế tối đa đến 90% sự
              bai nhão, xù lông. Chất liệu có ưu điểm co giãn, thấm hút và
              thoáng khí. Kết cấu sợi dài hơn cotton thường gấp 2-3 lần
            </li>
          </ul>
          <h4>Điểm nhấn thiết kế:</h4>
          <ul>
            <li>Họa tiết thỏ độc đáo, mới lạ</li>
            <li>Điểm nhấn đường can phối ở quần tăng phần độc đáo</li>
            <li>Form đáng thoải mái, trẻ trung, năng động</li>
          </ul>
          <h4>Tính năng, công dụng của sản phẩm: </h4>
          <ul>
            <li>Thoái mái, mát mẻ khi mặc ở nhà</li>
            <li>Trẻ trung, hợp thời trang, đa năng khi dạo phố, mua sắm</li>
            <li>Mềm mại dễ chịu khi mặc đi ngủ</li>
          </ul>
          <p>
            <b>Xuất xứ</b>: Sản phẩm được thiết kế độc quyền và sản xuất tỉ mỉ
            từng khâu, cam kết đảm bảo chất lượng bởi Sunfly.
          </p>
          <h4>Size màu sản phẩm:</h4>
          <ul>
            <li>Các màu sản phẩm: Xanh két, biển đậm, hồng nâu, tím nhạt</li>
            <b>
              (Lưu ý: Do điều kiện thiết bị và ánh sáng khác nhau, màu sắc thực
              tế của sản phẩm có thể chênh lệch khoảng 3 - 5% so với màu thực tế
              của sản phẩm).
            </b>
            <li>Các size: S-M-L-XL</li>
          </ul>
          <p>
            <b>Tư vấn chọn size:</b> Tham khảo bảng chọn size của sunfly. Hoặc
            chat để được nhân viên tư vấn thêm về size phù hợp.
          </p>
          <div>
            <img
              src="https://file.hstatic.net/1000304105/file/bang_size_nu_8886a4789fd34d10881e2d4d0b339040.jpg"
              alt=""
            />
          </div>
          <h3>CHÍNH SÁCH ĐÔI TRẢ:</h3>
          <p>
            Giao hàng đúng size- màu, lỗi 1 đổi 1. Nếu có bất kì khiếu nại cần
            SUNFLY hỗ trợ về sản phẩm, khi mở sản phẩm, khách hàng vui lòng quay
            lại video quá trình mở sản phẩm để được đảm bảo 100% đổi lại sản
            phẩm mới nếu SUNFLY giao bị lỗi.
          </p>
          <div>
            <img
              src="https://bizweb.dktcdn.net/100/424/488/files/doi-tra.jpg?v=1622728800229"
              alt=""
            />
          </div>
          <h3>HƯỚNG DẤN SỬ DỤNG </h3>
          <div style={{ paddingBottom: "1rem" }}>
            <img
              src="https://hellodongphuc.com/uploads/images/quy-trinh-giat-dung-cach.jpg"
              alt=""
            />
          </div>
          <h3>VỀ THƯƠNG HIỆU THỜI TRANG SUNFLY: </h3>
          <ul>
            <li>
              Sunfly được ra đời với sứ mệnh mang lại vẻ đẹp tươi trẻ,tự tin và
              năng động cho các chị em phụ nữ VN trong những giờ phút bên gia
              đình và người thân. Sau hơn 17 năm xây dựng và phát phát
              triển,Sunfly vẫn luôn tự hào là 1 thương hiệu thời trang mặc nhà
              đứng đầu tại thị trường Việt Nam.
            </li>
            <li>Cảm ơn các bạn đã tin tưởng và yêu thích SUNFLY</li>
            <li>
              Hãy Follow các kênh của Sunfly ngay, để được nhận ngay các ưu đãi
              độc quyền và được chăm sóc chu đáo nhất.
            </li>
            <li>
              Hãy chia sẻ sản phẩm của SUNFLY cho bạn bè người thân khi thích
              sản phẩm.
            </li>
          </ul>
        </div>
      </div>
      <div className="detail__footer drop-shadow-4xl">
        <div>
          <Chatzalo />
        </div>
        <button className="bt-add" onClick={showModal}>
          Thêm vào giỏ hàng
        </button>
        <button className="bt-buy" onClick={showModal}>
          Mua ngay
        </button>
      </div>
      {showPopup && (
        <Popup onClose={hiddenModal}>
          <CheckOut onClose={hiddenModal} />
        </Popup>
      )}
    </React.Fragment>
  );
};

export default DetailProduct;

// const slideImages = [
//   {
//     url: data.product_image ? data.product_image : DefaultImage,
//   },
//   {
//     url: "https://vn-live-03.slatic.net/p/7/ao-hoodie-tai-tho-sieu-cute-gianh-cho-be-1727-21104932-2a8274b96f9c87e88a90f93d11b4a7f7.jpg",
//   },
//   {
//     url: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
//   },
// ];
