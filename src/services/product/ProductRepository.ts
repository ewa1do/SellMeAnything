import { ProductResponse } from '@/models';

class ProductRepository {
  protected url = import.meta.env.VITE_APP_API_BASE_URL;

  public async getAll(): Promise<ProductResponse[]> {
    const response = await fetch(`${this.url}/product/`);

    const { data } = await response.json();
    const { body: products }: { body: ProductResponse[] } = data;

    return products;
  }

  public async get(endpoint: string): Promise<ProductResponse> {
    const response = await fetch(`${this.url}/product/${endpoint}`);

    const { data }: { data: ProductResponse } = await response.json();

    return data;
  }
}

export default ProductRepository;
