export interface ProductResponse {
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: number | string;
  images: string[];
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
}

export interface DataState {
  data: ProductResponse;
  loading: boolean;
}
