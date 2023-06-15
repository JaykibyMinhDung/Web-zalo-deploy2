import React from "react";
import "../components/ListShop/list.css";
import HeaderShop from "../components/ListShop/HeaderShop";
import Products from "../components/ListShop/Products";
import MenuShop from "../components/ListShop/MenuShop";

const productsTemplate = [
  {
    id: 1,
    nameProduct: "Chai lọ",
    discount: "10%",
    imageUrl:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
    idProducts: "#",
    price: 450000,
    topic: "Cốc đựng mang đi",
    oldPrice: 439000,
  },
  {
    id: 2,
    nameProduct: "Bình giữ nhiệt",
    discount: "10%",
    imageUrl:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
    idProducts: "/list",
    price: 365474,
    topic: "Cốc chịu nhiệt",
    oldPrice: 648893,
  },
  {
    id: 3,
    nameProduct: "Giấy nhớ",
    discount: "10%",
    imageUrl:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
    idProducts: "#z",
    price: 845759,
    topic: "Sách vở",
    oldPrice: 432432,
  },
  {
    id: 4,
    nameProduct: "Sổ",
    discount: "10%",
    imageUrl:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    idProducts: "#",
    price: 824247,
    topic: "Sách vở",
    oldPrice: 968600,
  },
  {
    id: 5,
    nameProduct: "Máy tính",
    discount: "10%",
    imageUrl:
      "https://newcdn.onshop.asia/images/narylee/bo-ni-bong-hinh-tho-cute-de-thuong.jpg",
    idProducts: "#",
    price: 100000000,
    topic: "Quần áo",
    oldPrice: 756444,
  },
  {
    id: 6,
    nameProduct: "Laptop",
    discount: "10%",
    imageUrl:
      "https://newcdn.onshop.asia/images/narylee/bo-ni-bong-hinh-tho-cute-de-thuong.jpg",
    idProducts: "#",
    price: 1003230000,
    topic: "Quần áo",
    oldPrice: 756444,
  },
  {
    id: 7,
    nameProduct: "Laptop2",
    discount: "10%",
    imageUrl:
      "https://vn-live-03.slatic.net/p/7/ao-hoodie-tai-tho-sieu-cute-gianh-cho-be-1727-21104932-2a8274b96f9c87e88a90f93d11b4a7f7.jpg",
    idProducts: "#",
    price: 143400000,
    topic: "Quần áo",
    oldPrice: 756444,
  },
  {
    id: 8,
    nameProduct: "Máy tính",
    discount: "10%",
    imageUrl:
      "https://vn-live-03.slatic.net/p/7/ao-hoodie-tai-tho-sieu-cute-gianh-cho-be-1727-21104932-2a8274b96f9c87e88a90f93d11b4a7f7.jpg",
    idProducts: "#",
    price: 100000000,
    topic: "Quần áo",
    oldPrice: 756444,
  },
];

const ListShop = () => {
  return (
    <div>
      <div className="relative">
        <div className="list__headershop">
          <HeaderShop />
          <MenuShop products={productsTemplate} />
        </div>
      </div>
      <Products products={productsTemplate} />
      {/* 
        Menu shop sẽ thao tác với product (click sẽ kích hoạt 2 chức năng: class active và lọc dữ liệu),
        menu shop sẽ lấy danh sách nhóm sản phẩm sau đó chuyền vào products
        products sẽ lọc các dữ liệu trong data truyền về
        Hiển thị dữ liệu lọc được ra screen
      */}
    </div>
  );
};

export default ListShop;
