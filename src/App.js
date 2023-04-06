import { useState, useEffect } from "react";
import { toast, ToastContainer } from 'react-toastify';
import Navbar from './components/Navbar';
import Product from './components/Product';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState('');

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

  const filteredProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(search.toLowerCase());
  })

  useEffect(() => {
    getProducts();
  })

  return (
    <>
    <Navbar />
    <div className='container'>
      <form className="search">
      <input 
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type='text'
        placeholder='Search'
        className='search__bar'
      />
      </form>
      <div className='product-wrapper'>
      {filteredProducts.map((product) => (
        <Product key={product.id} product={product} addProduct={addToCart} />
      ))}
      </div>
    <ToastContainer />
    </div>
    </>
  );
}
