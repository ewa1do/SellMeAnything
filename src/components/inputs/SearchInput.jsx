import { useState, useRef } from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import { useInput } from '../../hooks/useInput';

/**
 *
 * @returns A clickable SearchBar Component
 */

export const SearchInput = () => {
  const [hideInput, setHideInput] = useState(true);
  const inputRef = useRef();

  const { inputState, handleInputChange } = useInput({});

  const handleDisplayInputText = () => {
    setHideInput(!hideInput);
    inputRef.current.focus();
  };

  return (
    <div className='flex'>
      <i
        className='text-2xl cursor-pointer'
        onClick={handleDisplayInputText}
      >
        <IoSearchOutline />
      </i>
      <input
        ref={inputRef}
        type='text'
        placeholder='search...'
        className={`ml-1 border-b-2 outline-none text-slate-500 translate-x-10 duration-300 ${
          hideInput && 'opacity-0 translate-x-1 duration-300'
        }`}
        name='search'
        onChange={handleInputChange}
      />
    </div>
  );
};
