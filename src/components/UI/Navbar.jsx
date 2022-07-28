import {
  IoSearchOutline,
  IoPerson,
  IoBag,
} from 'react-icons/io5';

export const Navbar = () => {
  return (
    <div className='flex flex-row justify-between'>
      <div>
        <i className='text-2xl cursor-pointer'>
          <IoSearchOutline />
        </i>
      </div>
      <div className='flex flex-row'>
        <i className='text-xl mx-2 cursor-pointer'>
          <IoPerson />
        </i>
        <i className='text-xl cursor-pointer'>
          <IoBag />
        </i>
      </div>
    </div>
  );
};
