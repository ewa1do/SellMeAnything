import { IoPersonOutline, IoBagOutline } from 'react-icons/io5';

import { SearchInput } from '../../inputs/SearchInput';
import { LeftArrow } from '../../navigation/LeftArrow';
import { LinkToHomePage } from '../../navigation/LinkToHomePage';
import { NavbarItem } from './NavbarItem';

export const Navbar = ({ navigationArrow }) => {
  return (
    <div className='flex flex-row items-center'>
      {navigationArrow ? <LeftArrow /> : <LinkToHomePage />}
      <SearchInput />

      <div className='flex flex-row ml-24'>
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
