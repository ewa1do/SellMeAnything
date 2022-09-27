import { useCallback, useEffect, useState } from 'react';
import { getProductResponseById } from '@/services';
import { DataState } from '@/models';

export const useProduct = (productId: string) => {
  const [productState, setProductState] = useState<DataState>({
    data: {},
    loading: true,
  } as DataState);

  const getProduct = useCallback(async () => {
    const data = await getProductResponseById(productId);

    setProductState({
      data: data,
      loading: false,
    });
  }, [productId]);

  useEffect(() => {
    getProduct();
  }, [getProduct]);

  return productState;
};
