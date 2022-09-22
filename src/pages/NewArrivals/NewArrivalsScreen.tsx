import { detailedItems } from '@/utilities/itemList.js';
import { ItemCard } from '@/components/cards/ItemCard';
import { ListComponent } from '@/components/lists/ListComponent';
import { MainHeading } from '@/components/headings/';
import { Navbar } from '@/components/Layout/Navbar/';

export const NewArrivalsScreen = () => {
  return (
    <div className='p-3'>
      <Navbar />

      <MainHeading title='New Items on Sale!' />

      <ListComponent
        list={detailedItems}
        category='products'
        Component={ItemCard}
        center={true}
        pagination={true}
      />
    </div>
  );
};
