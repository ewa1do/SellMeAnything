export interface HOCProps {
  children: React.ReactElement | React.ReactElement[];
}

export interface Product {
  id: number;
  price: number;
  qty: number;
  stock: number;
  thumbnail: string;
  title: string;
  totalPrice: number;
}

export interface State {
  cart: Product[];
}
