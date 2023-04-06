import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

export default function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
      <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
    </Routes>
  </BrowserRouter>
    </>
  );
}
