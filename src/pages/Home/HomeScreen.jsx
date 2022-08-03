import { ListComponent } from '../../components/UI/ListComponent';
import { Navbar } from '../../components/UI/Navbar';
import { Category } from './Category';
import { categories } from '../../helpers/categories';

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
