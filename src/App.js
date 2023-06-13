import React, { useState } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import ListShop from "./pages/ListShop";
import Notfound from "./components/error/404";
import DetailProduct from "./components/ListShop/Product/DetailProduce";
import CheckOut from "./components/ListShop/Product/CheckOut";

function App() {
  const userName =
    "286024079704af9dedf4f893320733517211603af00a29ec34cb0e04699c86bd";
  const password = "45B02071D9565EF39F16EFDE946AF30D";
  // Lấy thông tin người dùng, Xác nhận tài khoản người dùng, valid tài khoản
  const [notification, setNotification] = useState("");
  axios({
    method: "GET",
    url: "https://api-nextcrm-v2.nextcrm.vn/api/auth/token",
    auth: {
      username: userName,
      password: password,
    },
  }).then((dataUser) => {
    console.log(dataUser);
    if (!dataUser.data) {
      throw new Error("Not found user!");
    }
    setNotification(dataUser.data.meta.message);
    localStorage.setItem("token", dataUser.data.data.token);
    localStorage.setItem("expires_in", dataUser.data.data.expires_in);
  });
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Notfound />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/list" element={<ListShop />} />
        <Route path="/detail" element={<DetailProduct />} />
        <Route path="/checkout" element={<CheckOut />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// Lấy token sau khi nhập tài khoản
// fetch("https://api-nextcrm-v2.nextcrm.vn/api/auth/token")
//   .then((dataUser) => {
//     if (!dataUser) {
//       throw new Error("Not found user!");
//     }
//     setNotification(dataUser.meta.message);
//     localStorage.setItem("token", dataUser.data.token);
//     localStorage.setItem("expires_in", dataUser.data.expires_in);
//   })
//   .catch((err) => console.log(err));
