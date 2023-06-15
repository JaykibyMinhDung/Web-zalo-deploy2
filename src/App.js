import React, { useState, useEffect } from "react";
import axios from "axios";
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
// import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { receiveToken } from "./store/token";

function App() {
  // const [notification, setNotification] = useState("");
  const [isLoadding, setisLoadding] = useState(false);
  // const [token, setToken] = useRecoilState(receiveToken)
  const setToken = useSetRecoilState(receiveToken);
  const userName =
    "286024079704af9dedf4f893320733517211603af00a29ec34cb0e04699c86bd";
  const password = "35F33ECAB48CF3672EE70D92AE6E5957";
  // Lấy thông tin người dùng, Xác nhận tài khoản người dùng, valid tài khoản
  const fetchToken = () => {
    setisLoadding(true);
    axios({
      method: "GET",
      // url: "https://api-nextcrm-v2.nextcrm.vn/api/auth/token",
      url: "https://api-nextcrm.nextcrm.vn/api/auth/token",
      auth: {
        username: userName,
        password: password,
      },
    })
      .then((dataUser) => {
        // console.log(dataUser);
        // dataUser.data;
        setToken(dataUser.data.data.token);
        if (!dataUser.data) {
          throw new Error("Not found user!");
        }
        // setNotification(dataUser.data.meta.message);

        // localStorage.setItem("token", dataUser.data.data.token);
        localStorage.setItem("expires_in", dataUser.data.data.expires_in);
      })
      .then(() => {
        setisLoadding(false);
      });
  };
  // const { data, isLoadding, isError } = useQuery("tokenUser", fetchToken);

  useEffect(() => {
    fetchToken();
  }, []);

  if (isLoadding) {
    return (
      <div style={{ textAlign: "center", fontSize: "150%" }}>Loadding...</div>
    );
  }

  // if (isError) {
  //   return <div style={{ textAlign: "center" }}>Server Error</div>;
  // }
  return (
    // Nếu thêm ở đây nó sẽ không chạy được
    // <RecoilRoot>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Notfound />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/list" element={<ListShop />} />
        <Route path="/detail" element={<DetailProduct />} />
        <Route path="/checkout" element={<CheckOut />} />
      </Routes>
    </BrowserRouter>
    // </RecoilRoot>
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
