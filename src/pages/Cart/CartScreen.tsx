import { useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { Link } from 'react-router-dom';
import { IoCardOutline } from 'react-icons/io5';

import { CartItem } from './CartItem';
import { CartScreenEmpty } from './CartScreenEmpty';
import { LeftArrow } from '../../components/navigation/LeftArrow';

import { calculateSubtotalShippingAndTotal } from '../../utilities/calculateTotal';

export const CartScreen = () => {
  const { items: cartItems } = useSelector(
    (state) => state.cart
  );

  const [subtotal, shippingCost, total] =
    calculateSubtotalShippingAndTotal(cartItems);

  return (
    <div>
      <LeftArrow />

      {cartItems.length !== 0 ? (
        <div className='flex flex-col items-center py-6'>
          <div className='flex flex-col justify-center w-5/6 shadow-leever-shadow rounded-md'>
            <ul className='flex flex-col justify-end pb-8 border-b'>
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

            <div>
              <div className='flex flex-col border-b py-3'>
                <hgroup className='flex justify-between px-4 my-1'>
                  <h3 className='text-gray-500'>Subtotal</h3>
                  <h6 className='text-sm font-semibold'>
                    ${subtotal}
                  </h6>
                </hgroup>
                <hgroup className='flex justify-between px-4 my-1'>
                  <h3 className='text-gray-500'>Shipping</h3>
                  <h6 className='text-sm font-semibold'>
                    ${shippingCost}
                  </h6>
                </hgroup>
              </div>
              <hgroup className='flex justify-between px-4 pt-4 items-center'>
                <h2>Total</h2>
                <h2 className='text-2xl'>
                  <span className='text-sm text-gray-700'>
                    US$
                  </span>{' '}
                  {total}
                </h2>
              </hgroup>
            </div>

            <Link
              to='/pay'
              className='flex justify-center mt-6 py-8'
            >
              <button className='flex bg-gray-800 w-full mx-6 rounded-md text-center text-lg justify-center items-center text-gray-200 py-2'>
                <i className='px-2 '>
                  <IoCardOutline />
                </i>
                Place order
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <CartScreenEmpty />
      )}
    </div>
  );
};
