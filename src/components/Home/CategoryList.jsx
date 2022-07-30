import { v4 } from 'uuid';

import { Category } from './Category';
import { categories } from '../../helpers/categories';

export const CategoryList = () => {
  return (
    <div>
      {categories.map((cat) => {
        return (
          <Category
            key={v4()}
            title={cat}
          />
        );
      })}
    </div>
  );
};
