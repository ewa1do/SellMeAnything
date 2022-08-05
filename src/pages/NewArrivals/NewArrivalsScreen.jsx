import { ItemCard } from '../../components/cards/ItemCard';
import { Navbar } from '../../components/Layout/Navbar/Navbar';
import { ListComponent } from '../../components/lists/ListComponent';

import { detailedItems } from '../../utilities/itemList.js';

export const NewArrivalsScreen = () => {
  return (
    <div className='p-3'>
      <Navbar navigationArrow={false} />

      <ListComponent
        list={detailedItems}
        Component={ItemCard}
      />
    </div>
  );
};
