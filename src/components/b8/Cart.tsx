import React from "react";
import { Product_Data } from "./Product_Data";

interface CartItem extends Product_Data {
  quantity: number;
}

interface Props {
  cart: CartItem[];
  updateQuantity: (id: number, type: "increase" | "decrease") => void;
  removeItem: (id: number) => void;
}

const Cart: React.FC<Props> = ({ cart, updateQuantity, removeItem }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div id="buyWindow" className={cart.length ? "show" : ""}>
      <div>Cart</div>
      <div>
        {cart.map((item) => (
          <div id="cartModel" key={item.id}>
            <img src={item.image} alt={item.name} />
            <div className="info">Điện thoại {item.name}</div>
            <div className="quantity">
              <button onClick={() => updateQuantity(item.id, "increase")}>+</button>
              {item.quantity}
              <button onClick={() => updateQuantity(item.id, "decrease")}>-</button>
            </div>
            <div className="delete" onClick={() => removeItem(item.id)}>🗑</div>
          </div>
        ))}
      </div>
      <div className="total">Tổng tiền: {total.toLocaleString()} đ</div>
    </div>
  );
};

export default Cart;
