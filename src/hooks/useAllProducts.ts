import { useState, useCallback, useEffect } from 'react';
import { ProductResponse } from '@/models';
import { getProductResponse } from '@/services';

/**
 * @returns An Object containing a product list and loading state
 */

interface ProductDataState {
  data: ProductResponse[];
  loading: boolean;
}

export const useAllProducts = (): ProductDataState => {
  const [products, setProducts] = useState<ProductDataState>({
    data: [],
    loading: true,
  });

  const getProducts = useCallback(async () => {
    const data = await getProductResponse();
    setProducts({
      ...products,
      data,
      loading: false,
    });
  }, []);

  useEffect(() => {
    getProducts();
  }, []);

  return products;
};
