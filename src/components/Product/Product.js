import React from 'react';
import './Product.css';

const Product = ({ product, handleAddToCart }) => {
     // const { product, handleAddToCart } = props;
     const { name, img, price, ratings, seller } = product;
     return (
          <div className="product">
               <img src={img} alt="" />
               <div className='product-info'>
                    <h5 className='product-name'>{name}</h5>
                    <p className='product-price'>Price : ${price}</p>
                    <div className='product-other-info' >
                         <small> Seller : {seller}</small>
                         <br />
                         <small> Ratings : {ratings} stars</small>
                    </div>
                    <button onClick={() => handleAddToCart(product)} className='product-button'>Add To Cart
                    </button>
               </div>
          </div>
     );
};

export default Product;