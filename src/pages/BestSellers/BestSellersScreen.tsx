import { ItemCard } from '@/components/cards/';
import { MainHeading } from '@/components/headings/';
import { Navbar } from '@/components/Layout/Navbar/';
import { ListComponent } from '@/components/lists/';

export const BestSellersScreen = () => {
  return (
    <div className='p-3'>
      <Navbar navigationArrow={false} />

      <MainHeading title='check our best sellers!' />

      <ListComponent
        category='products'
        Component={ItemCard}
        center={true}
        pagination={true}
      />
    </div>
  );
};
