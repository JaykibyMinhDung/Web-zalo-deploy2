import React from "react";
import HeaderShop from "../components/ListShop/HeaderShop";
import Products from "../components/ListShop/Products";
import MenuShop from "../components/ListShop/MenuShop";

const productsTemplate = [
  {
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
    nameProduct: "Máy tính",
    discount: "10%",
    imageUrl:
      "https://cdn.ttgtmedia.com/rms/onlineimages/hp_elitebook_mobile.jpg",
    idProducts: "#",
    price: 100000000,
    topic: "Đồ dùng công nghệ",
    oldPrice: 756444,
  },
  {
    nameProduct: "Laptop",
    discount: "10%",
    imageUrl:
      "https://cdn.ttgtmedia.com/rms/onlineimages/hp_elitebook_mobile.jpg",
    idProducts: "#",
    price: 1003230000,
    topic: "Đồ dùng công nghệ",
    oldPrice: 756444,
  },
  {
    nameProduct: "Laptop2",
    discount: "10%",
    imageUrl:
      "https://cdn.ttgtmedia.com/rms/onlineimages/hp_elitebook_mobile.jpg",
    idProducts: "#",
    price: 143400000,
    topic: "Đồ dùng công nghệ",
    oldPrice: 756444,
  },
  {
    nameProduct: "Máy tính",
    discount: "10%",
    imageUrl:
      "https://cdn.ttgtmedia.com/rms/onlineimages/hp_elitebook_mobile.jpg",
    idProducts: "#",
    price: 100000000,
    topic: "Đồ dùng công nghệ",
    oldPrice: 756444,
  },
];

const ListShop = () => {
  return (
    <div>
      <HeaderShop />
      <MenuShop products={productsTemplate} />
      <Products products={productsTemplate} />
    </div>
  );
};

export default ListShop;
