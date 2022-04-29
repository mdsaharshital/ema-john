import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";
import useCart from "../../Hooks/useCart";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./Order.css";

const Order = () => {
  const [cart, setCart] = useCart();
  const handleRemove = (product) => {
    const rest = cart.filter((pd) => pd._id !== product._id);
    setCart(rest);
    removeFromDb(product._id);
  };
  const navigate = useNavigate();
  return (
    <div className="shop">
      <div className="review-container">
        {cart.map((product) => (
          <ReviewItem
            key={product._id}
            product={product}
            handleRemove={handleRemove}
          ></ReviewItem>
        ))}
      </div>
      <div className="cart-order-summary">
        <Cart cart={cart}>
          <button onClick={() => navigate("/shipment")} className="preview-btn">
            Proceed Shipment <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </Cart>
      </div>
    </div>
  );
};

export default Order;
