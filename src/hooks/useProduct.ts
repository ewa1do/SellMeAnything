import { useState, useEffect } from 'react';
import { DataResponse } from '../interfaces';
import { API_URL_TEST } from '../utilities/config';

interface DataState {
  data: DataResponse;
  loading: boolean;
}

export const useProduct = (productId: string | undefined) => {
  const [productState, setProductState] = useState<DataState>({
    data: {},
    loading: true,
  } as DataState);

  const fetchDataFromApi = async () => {
    const res = await fetch(`${API_URL_TEST}/products/${productId}`);
    const body = await res.json();

    setProductState({
      data: { ...body },
      loading: false,
    });
  };

  useEffect(() => {
    fetchDataFromApi();
  }, [productId]);

  return productState;
};
