import { v4 } from 'uuid';
import { IoCheckboxOutline } from 'react-icons/io5';

import { itemList } from '../../helpers/itemList';
import { CartItem } from './CartItem';

export const CartItemList = () => {
  return (
    <>
      <div className='flex items-center justify-center text-2xl'>
        <i className='pr-2'>
          <IoCheckboxOutline />
        </i>
        <h1>Orders</h1>
      </div>

      <ul className='mt-20'>
        <div>
          <ul className='flex justify-end px-8'>
            <li className='px-16'>Item</li>
            <li className='px-12'>Qty</li>
            <li>Price</li>
          </ul>
        </div>
        {itemList.map((item) => {
          return (
            <CartItem
              key={v4()}
              {...item}
            />
          );
        })}
      </ul>
    </>
  );
};
