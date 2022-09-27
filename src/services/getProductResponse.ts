import { ProductResponse } from '@/models';

const url = import.meta.env.VITE_APP_API_BASE_URL;

export async function getProductResponse(): Promise<ProductResponse[]> {
  const response = await fetch(`${url}/product`);
  try {
    const { data } = await response.json();

    const { products }: { products: ProductResponse[] } = data.body;
    return products;
  } catch (error) {
    throw new Error('Error accessing products');
  }
}
