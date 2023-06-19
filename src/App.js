import React, { useState, useEffect, useCallback } from "react";
import client from "./util/baseUrl";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import "./App.css";
import HomePage from "./pages/HomePage";
import ListShop from "./pages/ListShop";
import Notfound from "./components/error/404";
import DetailProduct from "./components/ListShop/Product/DetailProduce";
import CheckOut from "./components/ListShop/Product/CheckOut";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { receiveToken } from "./store/token";
import Cart from "./components/cart/Cart";

function App() {
  const setToken = useSetRecoilState(receiveToken);
  const userName =
    "286024079704af9dedf4f893320733517211603af00a29ec34cb0e04699c86bd";
  const password = "35F33ECAB48CF3672EE70D92AE6E5957";
  // Lấy thông tin người dùng, Xác nhận tài khoản người dùng, valid tài khoản
  const fetchToken = async () => {
    const res = await client({
      method: "GET",
      url: "https://api-nextcrm.nextcrm.vn/api/auth/token",
      auth: {
        username: userName,
        password: password,
      },
    });
    console.log("App");
    return res.data.data;
  };
  const { data, isLoading, error } = useQuery("tokenUser", fetchToken);

  if (isLoading) {
    return (
      <div style={{ textAlign: "center", fontSize: "150%" }}>Loadding...</div>
    );
  }
  // setToken(res.data.data.token);
  setToken(data.token);
  // localStorage.setItem("expires_in", res.data.data.expires_in);
  localStorage.setItem("expires_in", data.expires_in);
  // console.log(data);

  if (error) {
    return <div style={{ textAlign: "center" }}>Server Error</div>;
  }
  return (
    // Nếu thêm ở đây nó sẽ không chạy được
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Notfound />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/list" element={<ListShop lockpage={isLoading} />} />
        <Route path="/detail" element={<DetailProduct />} />
        <Route path="/checkout" element={<CheckOut />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
