import { faArrowRight, faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../Hooks/useProducts';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {

    const [products, setProducts] = useProducts();

    const [cart, setCart] = useState([]);

    useEffect( () =>{
        const storedCart = getStoredCart();
        const savedCart =[];
        for(const id in storedCart){
            const addedProducts = products.find( product => product.id === id);
            if(addedProducts){
                const quantity = storedCart[id];
                addedProducts.quantity = quantity;
                savedCart.push(addedProducts);
            }
        }
        setCart(savedCart)
    },[products])
    const addToCart =(selectedProduct)=>{
        console.log('cliked', selectedProduct);
        let newCart =[];
        const exist = cart.find( product => product.id === selectedProduct.id);
        if(!exist){
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else{
            const rest = cart.filter( product => product.id !== selectedProduct.id);
            exist.quantity = exist.quantity +1;
            newCart=[...rest, exist];
        }
        setCart(newCart);
        addToDb(selectedProduct.id);
    }
    return (
        <div className='shop'>
            <div className="product-container">
                {
                    products.map( product => <Product key={product.id}
                    product={product}
                    addToCart={addToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-order-summary">
               <Cart cart={cart}>
                   <Link to='/order'>
                       <button className='preview-btn'>Order review <FontAwesomeIcon icon={faArrowRight}/></button>
                   </Link>
               </Cart>
            </div>
        </div>
    );
};

export default Shop;