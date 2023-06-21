import {
  // RecoilRoot,
  atom,
  // selector,
  // useRecoilState,
  // useRecoilValue,
} from "recoil";

// token
export const receiveToken = atom({
  key: "tokenUser",
  default: "",
});

// products
export const receiveKeyCategory = atom({
  key: "CategoryProducts",
  default: null,
});

// First Product
export const firstProducts = atom({
  key: "FirstProducts",
  default: null,
});

// Search Product
export const searchProductsRecoil = atom({
  key: "searchProducts",
  default: null,
});

// Reset Loading
export const resetLoading = atom({
  key: "resetLoading",
  default: false,
});

// productDetail
export const productDetail = atom({
  key: "detail",
  default: {
    variation_id: "",
    branch_id: "",
    unit_id: "",
  },
});

// cart
export const cart = atom({
  key: "shop",
  default: {
    userName: "",
    cart: [],
  },
});
