import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'
const Product = ({product, addToCart}) => {
    const {name, img, seller, ratings,price} = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
                <p><small>Seller:{seller}</small></p>
                <p><small>Ratings: {ratings} starts</small></p>
            </div>
            <button onClick={()=> addToCart(product)} className='cart-btn'>Add to cart <FontAwesomeIcon className='font-text' icon={faShoppingCart}></FontAwesomeIcon> </button>
        </div>
    );
};

export default Product;