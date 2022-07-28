import { Category } from './Category';
import { categories } from '../../helpers/categories';

export const CategoryList = () => {
  return (
    <div>
      {categories.map((cat, i) => {
        return (
          <Category
            key={i}
            title={cat}
          />
        );
      })}
    </div>
  );
};
