import React from "react";
import { Product_Data } from "./Product_Data";

interface Props {
  product: Product_Data;
  addToCart: (product: Product_Data) => void;
}

const ProductItem: React.FC<Props> = ({ product, addToCart }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} width="150" />
      <h3>{product.name}</h3>
      <p>Giá: {product.price.toLocaleString()} đ</p>
      <p>Tồn kho: {product.stock}</p>
      <button onClick={() => addToCart(product)}>🛒 Thêm vào giỏ</button>
    </div>
  );
};

export default ProductItem;
