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
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Notfound />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/list" element={<ListShop lockpage={isLoading} />} />
        <Route path="/detail/:id" element={<DetailProduct />} />
        <Route path="/checkout" element={<CheckOut />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
