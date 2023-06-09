import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import ListShop from "./pages/ListShop";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/list" element={<ListShop />} />
        {/* <Route path="/detail" element={<Detail />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
