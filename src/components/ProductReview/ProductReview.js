import React from "react";
import ProductsLoad from "../../Hooks/ProductsLoad";
import useCart from "../../Hooks/UseCart";
import { deleteFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";

const ProductReview = () => {
  const [products] = ProductsLoad();
  const [cart, setCart] = useCart(products);
  const handleRemove = (key) => {
    const newCart = cart.filter((product) => product.key !== key);
    setCart(newCart);
    deleteFromDb(key);
  };
  return (
    <div>
      <div className="shop-container">
        <div className="product-container">
          {cart.map((product) => (
            <ReviewItem
              product={product}
              handleRemove={handleRemove}
            ></ReviewItem>
          ))}
        </div>

        <div className="cart-container">
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default ProductReview;
