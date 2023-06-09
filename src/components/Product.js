import '../styles/Product.scss';
import { useState } from 'react';
import { AiOutlineInfoCircle, AiFillStar } from 'react-icons/ai';

function Product({ product, addProduct }) {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  }

  const addProductToCart = () => {
    addProduct(product);
  }

  return (
    <div className='product'>
      <div className='product__image'>
        <img src={product.image} alt='product-img'/>
      </div>
      <div className='product__info'>
        <p className='product__name'>{product.title}</p>
        <p className='product__price'>${product.price}</p>
        <div className='product__rating'><div className='product__rating__star'><AiFillStar/></div>{product.rating}</div>
        <button className='product__info__btn' onClick={addProductToCart}>Add to cart</button>
        <button onClick={toggleDescription} className='product__info__btn'>{showDescription ? "Hide details" : <p className='icon'><AiOutlineInfoCircle/></p>}</button>
        {showDescription && <p className='product__description'>{product.description}</p>}
      </div>
    </div>
  )
}

export default Product
