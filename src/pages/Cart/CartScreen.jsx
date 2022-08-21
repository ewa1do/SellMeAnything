import { useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { Link } from 'react-router-dom';
import {
  IoCardOutline,
  IoCheckboxOutline,
} from 'react-icons/io5';

import { ActionButtonWithIcon } from '../../components/buttons/ActionButtonWithIcon';
import { LeftArrow } from '../../components/navigation/LeftArrow';
import { CartItem } from './CartItem';

export const CartScreen = () => {
  const { items: cartItems } = useSelector(
    (state) => state.cart
  );

  return (
    <div>
      <LeftArrow />

      {cartItems.length !== 0 ? (
        <>
          <div className='flex items-center justify-center text-2xl'>
            <i className='pr-2'>
              <IoCheckboxOutline />
            </i>
            <h1>Orders</h1>
          </div>

          <div className='flex justify-center mt-20'>
            <ul className='flex flex-col justify-end px-8 pb-8 w-3/4'>
              {cartItems.map((item, i) => {
                return (
                  <CartItem
                    key={uuid()}
                    props={{
                      ...item,
                      iteration: i,
                    }}
                  />
                );
              })}
            </ul>
          </div>

          <Link
            to='/pay'
            className='flex justify-center mt-40'
          >
            <ActionButtonWithIcon
              Icon={IoCardOutline}
              value='Pay'
            />
          </Link>
        </>
      ) : (
        <div>No data</div>
      )}
    </div>
  );
};
