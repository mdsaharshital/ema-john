import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useCart from '../../Hooks/useCart';
import useProducts from '../../Hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Order.css';


const Order = () => {
    const [products, setProducts] = useProducts();
    const [ cart, setCart] = useCart(products);
    const handleRemove = product=>{
        const rest = cart.filter( pd=> pd.id !== product.id);
        setCart(rest);
        removeFromDb(product.id);
    };
    const navigate = useNavigate();
    return (
        <div className='shop'>
            <div className="review-container">
                {
                    cart.map( product=> <ReviewItem key={product.id}
                    product={product}
                    handleRemove={handleRemove}
                    ></ReviewItem>)
                }
            </div>
            <div className="cart-order-summary">
                <Cart cart={cart}>
                        <button onClick={()=> navigate('/inventory')} className='preview-btn'>Proceed Checkout <FontAwesomeIcon icon={faArrowRight}/></button>
                </Cart>
            </div>
        </div>
    );
};

export default Order;