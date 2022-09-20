import Image from '../../assets/no_items_screen.png';
import { Link } from 'react-router-dom';

export const CartScreenEmpty = () => {
  return (
    <div className='flex justify-center align-middle mt-12 min-h-[30rem]'>
      <div className='flex flex-col items-center w-5/6 shadow-leever-shadow rounded-md '>
        <img
          src={Image}
          className='w-64 mx-auto'
        />
        <hgroup className='text-center py-3'>
          <h2 className='text-2xl py-1'>Your Bag is Empty 🥺</h2>
          <h3 className='text-gray-600 w-52 mx-auto'>Looks like you haven't made your choice yet</h3>
        </hgroup>

        <Link
          className='bg-gray-800 text-lg text-gray-200 p-3 mt-4 rounded-md shadow-md shadow-slate-400'
          to='/new'
        >
          Go Shopping
        </Link>
      </div>
    </div>
  );
};
