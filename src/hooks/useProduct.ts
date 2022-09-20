import { useState, useMemo } from 'react';
import { API_URL_TEST } from '../utilities/config';

/**
 *
 * @param {number} productId
 * @returns A memorize object with data from the response
 */

export const useProduct = (productId) => {
  const [productState, setProductState] = useState({
    data: {},
    loading: true,
  });

  useMemo(async () => {
    const res = await fetch(
      `${API_URL_TEST}/products/${productId}`
    );

    const body = await res.json();

    setProductState({
      data: { ...body },
      loading: false,
    });
  }, [productId]);

  return productState;
};
