import { FavoriteItem } from './FavoriteItem';
import { LeftArrow } from '../../components/navigation/LeftArrow';
import { ListComponent } from '../../components/lists/ListComponent';

import { itemList } from '../../utilities/itemList';

export const FavoritesScreen = () => {
  return (
    <div>
      <LeftArrow />

      <div className='flex items-center justify-center text-2xl mb-20'>
        <i className='pr-2'></i>
        <h1>My Favorites</h1>
      </div>

      <ListComponent
        list={itemList}
        Component={FavoriteItem}
      />
    </div>
  );
};
