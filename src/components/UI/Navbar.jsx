import { useState } from 'react';
import {
  IoSearchOutline,
  IoPersonOutline,
  IoBagOutline,
} from 'react-icons/io5';

export const Navbar = () => {
  const [hideInput, setHideInput] = useState(true);

  const handleDisplayInputText = () => {
    setHideInput(!hideInput);
  };

  return (
    <div className='flex flex-row justify-between'>
      <div className='flex'>
        <i
          className='text-2xl cursor-pointer'
          onClick={handleDisplayInputText}
        >
          <IoSearchOutline />
        </i>
        <input
          type='text'
          placeholder='search...'
          className={`ml-1 border-b-2 outline-none text-slate-500 translate-x-10 duration-300 ${
            hideInput && 'opacity-0 translate-x-1 duration-300'
          }`}
        />
      </div>
      <div className='flex flex-row'>
        <i className='text-xl mx-2 cursor-pointer text-slate-700 hover:text-slate-900 duration-300'>
          <IoPersonOutline />
        </i>
        <i className='text-xl cursor-pointer text-slate-700 hover:text-slate-900 duration-300'>
          <IoBagOutline />
        </i>
      </div>
    </div>
  );
};
