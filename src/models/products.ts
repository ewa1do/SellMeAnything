export interface ProductResponse {
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: string;
  images: string[];
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
  qty?: number;
}

export interface DataState {
  data: ProductResponse;
  loading: boolean;
}
