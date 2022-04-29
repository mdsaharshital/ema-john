import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useCart from "../../Hooks/useCart";
import { addToDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
const Shop = () => {
  // const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart();
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);

  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(
      `https://limitless-cove-08656.herokuapp.com/product?page=${page}&size=${size}`
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [page, size]);

  // page count load
  useEffect(() => {
    fetch("https://limitless-cove-08656.herokuapp.com/productCount")
      .then((res) => res.json())
      .then((data) => {
        const count = data.count;
        const pages = Math.ceil(count / 10);
        console.log(pages, data);
        setPageCount(pages);
      });
  }, []);

  const addToCart = (selectedProduct) => {
    console.log("cliked", selectedProduct);
    let newCart = [];
    const exist = cart.find((product) => product._id === selectedProduct._id);
    if (!exist) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter(
        (product) => product._id !== selectedProduct._id
      );
      exist.quantity = exist.quantity + 1;
      newCart = [...rest, exist];
    }
    setCart(newCart);
    addToDb(selectedProduct._id);
  };
  return (
    <div className="shop">
      <div className="product-container">
        {products.map((product) => (
          <Product
            key={product._id}
            product={product}
            addToCart={addToCart}
          ></Product>
        ))}
        <div className="pagination">
          {[...Array(pageCount).keys()].map((number) => (
            <button
              key={number}
              className={page === number ? "selected" : ""}
              onClick={() => setPage(number)}
            >
              {number + 1}
            </button>
          ))}
          <select defaultValue={10} onChange={(e) => setSize(e.target.value)}>
            <option value="5">5</option>
            <option value={10}>10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>
      </div>
      <div className="cart-order-summary">
        <Cart cart={cart}>
          <Link to="/order">
            <button className="preview-btn">
              Order review <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
