import { v4 as uuid } from 'uuid';

import { CartItem } from './CartItem';
import { Product } from '../../interfaces';

interface Props {
  products: Product[];
}

export const CartProducts = ({ products }: Props) => {
  return (
    <ul className='flex flex-col justify-end pb-8 border-b'>
      {products.map((item) => {
        return (
          <CartItem
            key={uuid()}
            {...item}
          />
        );
      })}
    </ul>
  );
};
