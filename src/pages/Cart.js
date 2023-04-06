import Navbar from "../components/Navbar";
import "../styles/Cart.scss";
import { useState, useEffect } from "react";

export default function Cart({ cart, setCart }) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    cart.forEach((item) => {
      setTotal((prev) => prev + item.price);
    });
  }, [cart]);

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="cart">
          {cart.map((item) => (
            <div className="cart__product">
              <img src={item.image} alt={item.title} />
              <div className="cart__product__info">
                <p className="cart__product__info__title">{item.title}</p>
                <p className="cart__product__info__price">${item.price}</p>
              </div>
            </div>
          ))}
          <div className="cart__total">
            <p className="cart__total__title">Total: ${total}</p>
          </div>
        </div>
      </div>
    </>
  );
}
