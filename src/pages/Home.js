import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import Navbar from "../components/Navbar";
import Product from "../components/Product";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

export default function Home({ cart, setCart }) {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  const showToast = ({ success }) => {
    if (success) {
      toast.success(`Succesfully added to cart`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
    if (!success) {
      toast.error(`This item is already in your cart ;)`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  const getProducts = async () => {
    try {
      const response = await axios.get(
        "https://my-json-server.typicode.com/markushha/mockjs/products"
      );
      setProducts(response.data);
    } catch (e) {
      alert(e);
    }
  };

  const addToCart = (product) => {
    if (cart.find((item) => item.id === product.id)) {
      return showToast({ success: false });
    }
    setCart([...cart, product]);
    showToast({ success: true });
  };

  const filteredProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(search.toLowerCase());
  });

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <form className="search">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search"
            className="search__bar"
          />
        </form>
        <label className="filter-label">Filter</label>
        <div className="select-wrapper">
          <select
            onChange={(e) => {
              if (e.target.value === "low") {
                setProducts(
                  [...filteredProducts].sort((a, b) => a.price - b.price)
                );
              }

              if (e.target.value === "high") {
                console.log(1);
                setProducts(
                  [...filteredProducts].sort((a, b) => b.price - a.price)
                );
              }
            }}
            className="select"
          >
            <option value="low">Lowest Price</option>
            <option value="high">Highest Price</option>
          </select>
        </div>
        <div className="product-wrapper">
          {filteredProducts.map((product) => (
            <Product
              key={product.id}
              product={product}
              addProduct={addToCart}
            />
          ))}
        </div>
        <ToastContainer />
      </div>
    </>
  );
}