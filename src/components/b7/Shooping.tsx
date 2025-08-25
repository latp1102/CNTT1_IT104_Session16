import { Component } from "react";
import './Shopping.css'
interface Phone {
  name: string;
  price: number;
  link: string;
  quantity?: number;
}
interface Display {
  list: Phone[];
  buying: Phone[];
}
export default class Shopping extends Component<object, Display> {
  constructor(props: object) {
    super(props);
    this.state = {
      list: [
        {
            name: "Samsung Galaxy",
            price: 20000000,
            link: "https://tic.vn/uploads/636396217066191623_1.jpg",
        },
        {
          name: "Samsung Galaxy",
          price: 20500000,
          link: "https://tic.vn/uploads/636396217066191623_1.jpg",
        },
        {
          name: "Samsung Galaxy",
          price: 21000000,
          link: "https://tic.vn/uploads/636396217066191623_1.jpg",
        },
        {
          name: "Samsung Galaxy",
          price: 21500000,
          link: "https://tic.vn/uploads/636396217066191623_1.jpg",
        },
        {
          name: "Samsung Galaxy",
          price: 19000000,
          link: "https://tic.vn/uploads/636396217066191623_1.jpg",
        },
        {
          name: "Samsung Galaxy",
          price: 13000000,
          link: "https://tic.vn/uploads/636396217066191623_1.jpg",
        },
        {
          name: "Samsung Galaxy",
          price: 24000000,
          link: "https://tic.vn/uploads/636396217066191623_1.jpg",
        },
        {
          name: "Samsung Galaxy",
          price: 20500000,
          link: "https://tic.vn/uploads/636396217066191623_1.jpg",
        },
      ],
      buying: [],
    };
  }
  render() {
    const handleShow = (e: React.MouseEvent<HTMLImageElement>) => {
      e.stopPropagation();
      (document.querySelector("#buyWindow") as HTMLDivElement).classList.toggle(
        "show"
      );
    };
    return (
      <>
        <div id="header">
          <div id="headerLeft">
            <span>Trang chủ</span>
            <span>Danh sách sản phẩm</span>
          </div>
          <div id="headerRight">
            <img
              src={"https://img.pikbest.com/png-images/qiantu/shopping-cart-icon-png-free-image_2605207.png!w700wp"}
              alt="img"
              width="20px"
              height="20px"
              onClick={handleShow}
            />
          </div>
          <div id="buyWindow">
            <div>Cart</div>
            <div>
              {this.state.buying.map((phone) => (
                <div>
                  <div id="cartModel">
                    <img src={phone.link} width="20px" height="20px" />
                  </div>
                  <div>Điện thoại {phone.name}</div>
                  <div>
                    <button>+</button> {phone.quantity} <button>-</button>
                  </div>
                </div>
              ))}
            </div>
            <div>Tổng tiền: </div>
          </div>
        </div>
        <div id="content">
          <div id="phoneList">
            {this.state.list.map((phone) => (
              <div className="items">
                <div>
                  <img src={phone.link} width="250px" height="200px" />
                </div>
                <div>Điện thoại {phone.name}</div>
                <div>{phone.price} đ</div>
                <button>
                  <img src={"https://png.pngtree.com/element_our/20190531/ourmid/pngtree-shopping-cart-convenient-icon-image_1287807.jpg"} alt="img" width="20px" height="20px" /> Thêm
                  vào giỏ hàng
                </button>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}
