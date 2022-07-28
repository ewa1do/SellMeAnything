import { Navbar } from '../UI/Navbar';
import { CategoryList } from './CategoryList';

export const HomeScreen = () => {
  return (
    <div className='p-3'>
      <Navbar />
      <CategoryList />
    </div>
  );
};
