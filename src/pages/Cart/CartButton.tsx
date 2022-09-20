import { Link } from 'react-router-dom';
import { IoCardOutline } from 'react-icons/io5';

export const CartButton = () => {
  return (
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
  );
};
