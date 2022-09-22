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

export interface ImageCarouselProps {
  duration?: number;
  images: string | string[];
  thumbnail: string;
}

export interface DataResponse {
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: number;
  images: string[];
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
}
