import { ItemCard } from '../../components/cards/ItemCard';
import { MainHeading } from '../../components/headings/MainHeading';
import { Navbar } from '../../components/Layout/Navbar/Navbar';
import { ListComponent } from '../../components/lists/ListComponent';

export const BestSellersScreen = () => {
  return (
    <div className='p-3'>
      <Navbar navigationArrow={false} />

      <MainHeading title='check our best sellers!' />

      <ListComponent
        category='products'
        Component={ItemCard}
        center={true}
      />
    </div>
  );
};
