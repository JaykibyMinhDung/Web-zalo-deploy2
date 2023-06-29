import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useRecoilState } from "recoil";
import "./App.css";
import HomePage from "./pages/HomePage";
import ListShop from "./pages/ListShop";
import Notfound from "./components/error/404";
import DetailProduct from "./components/ListShop/Product/DetailProduce";
import CheckOut from "./components/ListShop/Product/CheckOut";
import { useQuery } from "react-query";
import { receiveToken } from "./store/recoil_store";
import Cart from "./components/cart/Cart";
import { GET_TOKEN } from "./constants/queryKeys";
import { getToken } from "./api/api";
import Loading from "./components/sninner_loading/Sninner";
import Card from "./styles/card/Card.jsx";
import News from "./components/news/News";
import Brand from "./components/brand/Brand";
import Notification from "./components/notifications/Notifications";

function App() {
  const [token, setToken] = useRecoilState(receiveToken);

  const { data, isFetched, isLoading } = useQuery(GET_TOKEN, () => getToken());

  useEffect(() => {
    if (isFetched && data.token) {
      setToken(data.token);
    }
  }, [data, isFetched, setToken]);

  return !token ? (
    <Loading />
  ) : (
    <BrowserRouter baseURL="/zapps/[ZALO_MINI_APP_ID]">
      <Routes>
        <Route path="*" element={<Notfound />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/news" element={<News />} />
        <Route path="/brand" element={<Brand />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/list" element={<ListShop lockpage={isLoading} />} />
        <Route path="/detail/:id" element={<DetailProduct />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/style" element={<Card />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
