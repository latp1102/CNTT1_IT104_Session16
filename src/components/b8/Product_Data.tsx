export interface Product_Data {
  id: number;
  name: string;
  price: number;
  image: string;
  stock: number; 
}

export const products: Product_Data[] = [
  {
    id: 1,
    name: "Samsung Galaxy S21",
    price: 20000000,
    image: "https://tic.vn/uploads/636396217066191623_1.jpg",
    stock: 5,
  },
  {
    id: 2,
    name: "iPhone 14 Pro Max",
    price: 20500000,
    image: "https://tic.vn/uploads/636396217066191623_1.jpg",
    stock: 3,
  },
  {
    id: 3,
    name: "Samsung Galaxy S22",
    price: 21000000,
    image: "https://tic.vn/uploads/636396217066191623_1.jpg",
    stock: 2,
  },
  {
    id: 4,
    name: "iPhone 11 Pro Max",
    price: 21500000,
    image: "https://tic.vn/uploads/636396217066191623_1.jpg",
    stock: 4,
  },
];
