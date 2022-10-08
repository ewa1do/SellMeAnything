import { useCallback, useEffect, useState } from 'react';
import { getProductResponseById } from '@/services';
import { DataState } from '@/models';
import { loadActiveProduct } from '@/redux';

export const useProduct = (productId: string | undefined) => {
  if (typeof productId === 'undefined') {
    productId = '';
  }

  const [productState, setProductState] = useState<DataState>({
    data: {},
    loading: true,
  } as DataState);

  const getProduct = useCallback(async () => {
    const id: string = productId as string;

    const data = await getProductResponseById(id);

    setProductState({
      ...productState,
      data,
      loading: false,
    });
  }, [productId]);

  useEffect(() => {
    getProduct();
  }, [getProduct]);

  useEffect(() => {
    if (productState.loading) {
      loadActiveProduct(productState.data);
    }
  }, []);

  console.log(productState);

  return productState;
};
