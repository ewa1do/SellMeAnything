import { ListComponent } from '../../components/lists/ListComponent';
import { Navbar } from '../../components/Layout/Navbar/Navbar';
import { Category } from './Category';
import { categories } from '../../utilities/categories';

export const HomeScreen = () => {
  return (
    <div className='p-3'>
      <Navbar />
      <ListComponent
        list={categories}
        Component={Category}
      />
    </div>
  );
};
