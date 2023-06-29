import React, { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { Slide } from "react-slideshow-image";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";

// component
import {
  productDetail,
  // resetLoading,
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
import Loading from "../../sninner_loading/Sninner";

const DetailProduct = () => {
  //reactHook, defined
  const navigate = useNavigate();

  // state
  const [showPopup, setShowPopup] = useState(false);
  const [BuyOrAdd, setBuyOrAdd] = useState("");
  const detailData = useRecoilValue(productDetail);
  // const resetLoad = useSetRecoilState(resetLoading);
  const searchProduct = useSetRecoilState(searchProductsRecoil);

  // request api
  const { data, isFetched, isLoading } = useQuery(
    [DETAIL_PRODUCT, detailData],
    () =>
      getProductDetail(
        detailData.variation_id,
        detailData.unit_id,
        detailData.branch_id
      )
  );

  // function app
  const back = () => {
    searchProduct("");
    // resetLoad(false);
    navigate("/list");
  };
  const showModal = (param) => {
    document.body.style.overflow = "hidden";
    setBuyOrAdd(param);
    return setShowPopup(true);
  };
  const hiddenModal = () => {
    document.body.style.overflow = "auto";
    return setShowPopup(false);
  };

  const testHam = () => {
    console.log(isLoading);
    if (isLoading) {
      return (
        <div style={{ position: "absolute", top: "35%", left: "30%" }}>
          <Loading />
        </div>
      );
    }

    if (!data && isFetched) {
      return navigate("/list");
    }
    if (data && isFetched) {
      return (
        <>
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
              <div className="slideshow-container">
                <Slide autoplay={false}>
                  {Array.isArray(data.product_image) &&
                  data.product_image.length > 1 ? (
                    data.product_image.map((slideImage, index) => (
                      <div key={index} className="relative">
                        <img
                          src={slideImage.url ? slideImage.url : DefaultImage}
                          alt=""
                        />
                        <span className="totalImage">
                          {index + 1 + "/" + data.product_image.length}
                        </span>
                      </div>
                    ))
                  ) : (
                    <img
                      src={
                        data.product_image ? data.product_image : DefaultImage
                      }
                      alt="lỗi"
                    />
                  )}
                </Slide>
              </div>
            </>
            <div style={{ paddingLeft: "1.2rem", paddingTop: "0.5rem" }}>
              <h2>{data.name}</h2>
              <p className="price">{VND.format(data.price)}</p>
            </div>
          </div>

          <div className="detail__background list-[disc] list-inside">
            {data.product_description}
          </div>

          <div className="detail__footer drop-shadow-4xl">
            <div>
              <Chatzalo />
            </div>
            <button className="bt-add" onClick={() => showModal("add")}>
              Thêm vào giỏ hàng
            </button>
            <button className="bt-buy" onClick={() => showModal("buy")}>
              Mua ngay
            </button>
          </div>
          {showPopup && (
            <Popup onClose={hiddenModal}>
              <CheckOut
                onClose={hiddenModal}
                ProductWillBuy={data}
                functionCheckOut={BuyOrAdd}
              />
            </Popup>
          )}
        </>
      );
    }
  };

  useEffect(() => {
    testHam();
  }, [data]);

  return <React.Fragment>{testHam()}</React.Fragment>;
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
