import { createContext, useCallback, useEffect, useState } from 'react';
import { ProductResponse } from '@/models';

interface Props {
  children: React.ReactElement | React.ReactElement[];
  product: ProductResponse;
}

export interface ContextProduct extends ProductResponse {
  qty?: number;
}

export const ProductContext = createContext({} as ContextProduct);

const { Provider } = ProductContext;

export const Product = ({ children, product }: Props) => {
  const [productState, setProductState] = useState(product);

  const setPageContext = useCallback(() => {
    setProductState({ ...productState });
  }, [productState]);

  useEffect(() => setPageContext(), []);

  return (
    <Provider value={productState}>
      <div className='flex flex-col mt-6 p-2 w-4/6 shadow-leever-shadow rounded-lg'>{children}</div>
    </Provider>
  );
};
