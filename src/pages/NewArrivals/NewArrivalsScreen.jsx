import { ItemCard } from '../../components/cards/ItemCard';
import { MainHeading } from '../../components/headings/MainHeading';
import { Navbar } from '../../components/Layout/Navbar/Navbar';
import { ListComponent } from '../../components/lists/ListComponent';

import { detailedItems } from '../../utilities/itemList.js';

export const NewArrivalsScreen = () => {
  return (
    <div className='p-3'>
      <Navbar navigationArrow={false} />

      <MainHeading title='New Items on Sale!' />

      <ListComponent
        list={detailedItems}
        category='products'
        Component={ItemCard}
        center={true}
      />
    </div>
  );
};
