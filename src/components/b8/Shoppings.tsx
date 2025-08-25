import React, { Component } from "react";
import { Product_Data, products } from "./Product_Data";
import ProductList from "./ProductList";
import Cart from "./Cart";
import "../b7/Shopping.css";

// Định nghĩa kiểu cho item trong giỏ
interface CartItem extends Product_Data {
  quantity: number;
}

interface State {
  cart: CartItem[];
  showCart: boolean;
}

// SVG icon giỏ hàng thay cho file ảnh ngoài
const CartIcon: React.FC<{ size?: number }> = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="currentColor"
    viewBox="0 0 16 16"
  >
    <path d="M0 1.5A.5.5 0 0 1 .5 1h1a.5.5 0 0 1 
    .485.379L2.89 5H14.5a.5.5 0 0 
    1 .49.598l-1.5 7A.5.5 0 0 1 13 
    13H4a.5.5 0 0 1-.49-.402L1.61 
    2H.5a.5.5 0 0 1-.5-.5zM4.415 
    12h8.17l1.313-6H3.102l1.313 
    6zM5.5 13a1 1 0 1 0 0 2 1 1 0 
    0 0 0-2zm6 0a1 1 0 1 0 0 2 1 
    1 0 0 0 0-2z"/>
  </svg>
);

export default class Shopping extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      cart: JSON.parse(localStorage.getItem("cart") || "[]"),
      showCart: false,
    };
  }

  // Lưu giỏ hàng vào state + localStorage
  saveCart = (cart: CartItem[]) => {
    this.setState({ cart });
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  // Thêm sản phẩm vào giỏ
  addToCart = (product: Product_Data) => {
    let cart = [...this.state.cart];
    const index = cart.findIndex((item) => item.id === product.id);

    if (index === -1) {
      cart.push({ ...product, quantity: 1 });
    } else {
      if (cart[index].quantity < product.stock) {
        cart[index].quantity++;
      } else {
        alert("Số lượng sản phẩm trong kho không đủ");
        return;
      }
    }
    this.saveCart(cart);
  };

  // Tăng/giảm số lượng
  updateQuantity = (id: number, type: "increase" | "decrease") => {
    let cart = [...this.state.cart];
    const index = cart.findIndex((item) => item.id === id);

    if (index !== -1) {
      if (type === "increase") {
        if (cart[index].quantity < cart[index].stock) {
          cart[index].quantity++;
        } else {
          alert("Số lượng sản phẩm trong kho không đủ");
          return;
        }
      } else if (type === "decrease" && cart[index].quantity > 1) {
        cart[index].quantity--;
      }
    }
    this.saveCart(cart);
  };

  // Xóa sản phẩm khỏi giỏ
  removeItem = (id: number) => {
    let cart = this.state.cart.filter((item) => item.id !== id);
    this.saveCart(cart);
  };

  // Hiện/ẩn giỏ hàng
  toggleCart = () => {
    this.setState((prev) => ({ showCart: !prev.showCart }));
  };

  render() {
    return (
      <>
        {/* Header */}
        <div id="header">
          <div id="headerLeft">
            <span>Trang chủ</span>
            <span>Danh sách sản phẩm</span>
          </div>
          <div id="headerRight" onClick={this.toggleCart} style={{ cursor: "pointer" }}>
            <CartIcon size={25} />
            <span
              style={{
                background: "red",
                color: "white",
                borderRadius: "50%",
                padding: "2px 6px",
                marginLeft: "5px",
              }}
            >
              {this.state.cart.length}
            </span>
          </div>
        </div>

        {/* Danh sách sản phẩm */}
        <ProductList products={products} addToCart={this.addToCart} />

        {/* Giỏ hàng */}
        {this.state.showCart && (
          <Cart
            cart={this.state.cart}
            updateQuantity={this.updateQuantity}
            removeItem={this.removeItem}
          />
        )}
      </>
    );
  }
}
