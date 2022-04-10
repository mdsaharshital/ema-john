import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css';
const ReviewItem = ({product,handleRemove}) => {
    const {name,shipping,img, price, quantity} = product;
    return (
        <div className='review-item-container'>
            <img src={img} width='91px' alt="" />
            <div className="review-item-desc-container">
                <div className="review-item-desc">
                    <p className='product-title' title={name}>{name.length  < 20? name.slice(0,20) +'..' : name}</p>
                    <p>Price: <span className="orange-color">${price}</span></p>
                    <p>Shipping: <span className="orange-color">${shipping}</span></p>
                    <p>Quantity: {quantity}</p>
                </div>
                <div className="delete-btn-cont">
                    <button onClick={()=>handleRemove(product)} className='delete-btn'>
                        <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;