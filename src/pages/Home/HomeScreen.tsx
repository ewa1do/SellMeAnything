import { Navbar } from '@/components/Layout/Navbar/';
import { ListComponent } from '@/components/lists/';
import { Category } from './Category';

import { categories } from '@/utilities/categories';

export const HomeScreen = (): JSX.Element => {
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
