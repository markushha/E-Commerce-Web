import Navbar from "../components/Navbar";
import "../styles/Cart.scss";
import { useState, useEffect } from "react";
import { CiCircleRemove } from "react-icons/ci";

export default function Cart({ cart, setCart }) {
  const [total, setTotal] = useState(0);

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const getTotal = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price;
    });
    setTotal(total);
  };

  useEffect(() => {
    getTotal()
  }, [cart]);

  return (
    <>
      <Navbar />
      <div className="container">
        {cart.length === 0 && (
          <div className="flex items-center justify-center">
            <p className="cart__product__info__title text-white">
              Cart is empty!
            </p>
          </div>
        )}
        {cart.length !== 0 && (
          <div className="cart">
            {cart.map((item) => (
              <div className="cart__product">
                <img src={item.image} alt={item.title} />
                <div className="cart__product__info">
                  <p className="cart__product__info__title">{item.title}</p>
                  <p className="cart__product__info__price">${item.price}</p>
                </div>
                <button onClick={() => removeFromCart(item.id)}>
                  <p className="cart__product__remove"><CiCircleRemove /></p>
                </button>
              </div>
            ))}
            <div className="cart__total">
              <p className="cart__total__title">Total: ${total}</p>
              <button className="cart__total__checkout">Go to Checkout</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
