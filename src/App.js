import Container from '@mui/material/Container';
import { useState, useEffect } from "react";
import Navbar from './components/Navbar';
import axios from 'axios';

export default function App() {
  const [products, setProducts] = useState([])

  const getProducts = async () => {
    const response = await axios.get('https://my-json-server.typicode.com/markushha/mockjs/products');
    setProducts(response.data);
  }

  useEffect(() => {
    getProducts();
  })

  return (
    <>
    <Navbar />
    <Container maxWidth={"sm"}>
      {products.map((product) => (
        <div key={product.id}>{product.title}</div>
      ))}
    </Container>
    </>
  );
}
