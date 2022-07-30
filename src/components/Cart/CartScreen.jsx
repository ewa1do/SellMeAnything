import { Link } from 'react-router-dom';
import { IoCardOutline } from 'react-icons/io5';

import { ActionButtonWithIcon } from '../UI/ActionButtonWithIcon';
import { LeftArrow } from '../UI/LeftArrow';
import { CartItemList } from './CartItemList';

export const CartScreen = () => {
  return (
    <div>
      <LeftArrow />

      <CartItemList />

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
