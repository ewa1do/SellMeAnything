import { IoBagOutline, IoPersonOutline } from 'react-icons/io5';
import { Navbar, NavbarItem } from '../../components/Layout/Navbar';
import { ListComponent } from '../../components/lists/ListComponent';
import { Category } from './Category';
import { categories } from '../../utilities/categories';

export const HomeScreen = (): JSX.Element => {
  return (
    <div className='p-3'>
      <Navbar>
        <NavbarItem
          path='profile'
          Icon={<IoPersonOutline />}
        />
        <NavbarItem
          path='cart'
          Icon={<IoBagOutline />}
        />
      </Navbar>

      <ListComponent
        list={categories}
        Component={Category}
      />
    </div>
  );
};
