import { ProductResponse } from '@/models';
import ProductRepository from './ProductRepository';

const product = new ProductRepository();

export async function getProductResponse(): Promise<ProductResponse[]> {
  return product.getAll();
}

export async function getProductResponseById(endpoint: string): Promise<ProductResponse> {
  return product.get(endpoint);
}
