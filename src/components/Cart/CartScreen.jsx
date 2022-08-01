import { Link } from 'react-router-dom';
import {
  IoCardOutline,
  IoCheckboxOutline,
} from 'react-icons/io5';

import { ActionButtonWithIcon } from '../UI/ActionButtonWithIcon';
import { LeftArrow } from '../UI/LeftArrow';
import { ListComponent } from '../UI/ListComponent';
import { CartItem } from './CartItem';
import { itemList } from '../../helpers/itemList';

export const CartScreen = () => {
  return (
    <div>
      <LeftArrow />

      <div className='flex items-center justify-center text-2xl'>
        <i className='pr-2'>
          <IoCheckboxOutline />
        </i>
        <h1>Orders</h1>
      </div>

      <div className='mt-20'>
        <ul className='flex justify-end px-8'>
          <li className='px-16'>Item</li>
          <li className='px-12'>Qty</li>
          <li>Price</li>
        </ul>

        <ListComponent
          list={itemList}
          Component={CartItem}
        />
      </div>

      <Link
        to='/pay'
        className='flex justify-center mt-40'
      >
        <ActionButtonWithIcon
          icon={<IoCardOutline />}
          value='Pay'
        />
      </Link>
    </div>
  );
};
