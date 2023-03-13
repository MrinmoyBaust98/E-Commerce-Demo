import React from "react";
import { useNavigate } from "react-router-dom";
import ProductsLoad from "../../Hooks/ProductsLoad";
import useCart from "../../Hooks/UseCart";
import { deleteFromDb, clearTheCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";

const ProductReview = () => {
  const [products] = ProductsLoad();
  const [cart, setCart] = useCart(products);

  const navigate = useNavigate();

  const handleRemove = (key) => {
    const newCart = cart.filter((product) => product.key !== key);
    setCart(newCart);
    deleteFromDb(key);
  };

  const handlePlaceOder = () => {
    navigate("/shipping");
    // Clear UI when PlaceOder Clicked
    // setCart([]);
    // // clear From Local Store also. As when Reload it will completely clear
    // // clearCart import from Fakedb
    // clearTheCart();
  };
  return (
    <div>
      <div className="shop-container">
        <div className="product-container">
          {cart.map((product) => (
            <ReviewItem
              key={product.key}
              product={product}
              handleRemove={handleRemove}
            ></ReviewItem>
          ))}
        </div>

        <div className="cart-container">
          <Cart cart={cart}>
            <button onClick={handlePlaceOder} className="remove-btn">
              Place Oder
            </button>
          </Cart>
        </div>
      </div>
    </div>
  );
};

export default ProductReview;
