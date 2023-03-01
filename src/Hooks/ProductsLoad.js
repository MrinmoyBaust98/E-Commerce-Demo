import { useEffect, useState } from "react";

const ProductsLoad = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return [products];
};

export default ProductsLoad;
