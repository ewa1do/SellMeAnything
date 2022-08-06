import { ItemCard } from '../../components/cards/ItemCard';
import { MainHeading } from '../../components/headings/MainHeading';
import { Navbar } from '../../components/Layout/Navbar/Navbar';
import { ListComponent } from '../../components/lists/ListComponent';

export const TrendingScreen = () => {
  return (
    <div className='p-3'>
      <Navbar navigationArrow={false} />

      <MainHeading title='Trending products for you!' />

      <ListComponent
        category='products'
        Component={ItemCard}
        center={true}
      />
    </div>
  );
};
