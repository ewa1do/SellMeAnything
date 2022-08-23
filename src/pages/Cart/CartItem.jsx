import { IoTrashBinOutline } from 'react-icons/io5';

export const CartItem = ({ props }) => {
  const { title, thumbnail, qty, price, stock } = props;

  return (
    <li
      className={`container flex h-32 px-4 justify-around items-center relative max-w-sm`}
    >
      <div className='relative'>
        <img
          src={thumbnail}
          className='w-32 h-20 p-3 border-2 border-slate-200'
        />
        <span className='border border-slate-200 bg-slate-100 rounded-full text-sm text-gray-400 drop-shadow-sm absolute top-0 left-20 px-2 py-1'>
          {qty}
        </span>
      </div>
      <div className='w-48 text-center px-2'>
        <h2 className='text-md font-medium'>{title}</h2>
      </div>
      <div>
        <span className='text-md pl-2'>${price * qty}</span>
      </div>
      <div className='ml-12 flex items-center align-middle'>
        <i className='cursor-pointer'>
          <IoTrashBinOutline />
        </i>
      </div>
    </li>
  );
};
