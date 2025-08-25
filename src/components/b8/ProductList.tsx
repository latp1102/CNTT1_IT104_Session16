import React from "react";
import { Product_Data } from "./Product_Data";
import ProductItem from "./ProductItem";

interface Props {
  products: Product_Data[];
  addToCart: (product: Product_Data) => void;
}

const ProductList: React.FC<Props> = ({ products, addToCart }) => {
  return (
    <div id="phoneList">
      {products.map((p) => (
        <ProductItem key={p.id} product={p} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;
