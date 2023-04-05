import Container from '@mui/material/Container';
import { useState, useEffect } from "react";
import Navbar from './components/Navbar';
import axios from 'axios';
import Product from './components/Product';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const showToast = ({ title, success }) => {
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
  }

  const getProducts = async () => {
    try {
      const response = await axios.get('https://my-json-server.typicode.com/markushha/mockjs/products');
      setProducts(response.data);
    } catch (e) {
      alert(e);
    }
    
  }

  const addToCart = (product) => {
    if (cart.find((item) => item.id === product.id)) {
      return showToast({ success: false });
    }
    setCart([...cart, product]);
    showToast({ success: true });
    console.log(cart);
  }

  useEffect(() => {
    getProducts();
  })

  return (
    <>
    <Navbar />
    <div className='container'>
      {products.map((product) => (
        <Product key={product.id} product={product} addProduct={addToCart} />
      ))}
    <ToastContainer />
    </div>
    </>
  );
}
