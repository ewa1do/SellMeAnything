import { IoPersonOutline, IoBagOutline } from 'react-icons/io5';

import { LeftArrow } from '@/components/navigation/';
import { LinkToHomePage } from '@/components/navigation/';
import { NavbarItem } from './';
import { SearchInput } from '@/components/inputs/';

interface Props {
  navigationArrow?: boolean;
}

export const Navbar = ({ navigationArrow }: Props): JSX.Element => {
  return (
    <div className='flex flex-row items-center'>
      {navigationArrow ? <LeftArrow /> : <LinkToHomePage />}
      <SearchInput />

      <div className='flex flex-row ml-24'>
        <NavbarItem
          path='profile'
          Icon={<IoPersonOutline />}
        />
        <NavbarItem
          path='cart'
          Icon={<IoBagOutline />}
        />
      </div>
    </div>
  );
};
