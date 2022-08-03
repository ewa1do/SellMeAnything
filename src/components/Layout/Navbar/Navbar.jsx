import { IoPersonOutline, IoBagOutline } from 'react-icons/io5';

import { SearchInput } from '../../inputs/SearchInput';
import { NavbarItem } from './NavbarItem';

export const Navbar = () => {
  return (
    <div className='flex flex-row justify-between'>
      <SearchInput />

      <div className='flex flex-row'>
        <NavbarItem
          path='profile'
          icon={<IoPersonOutline />}
        />

        <NavbarItem
          path='cart'
          icon={<IoBagOutline />}
        />
      </div>
    </div>
  );
};
