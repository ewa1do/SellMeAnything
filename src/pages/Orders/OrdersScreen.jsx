import { LeftArrow } from '../../components/navigation/LeftArrow';
import { ListComponent } from '../../components/lists/ListComponent';
import { OrderComponent } from './OrderComponent';
import { orders } from '../../utilities/itemList';

export const OrdersScreen = () => {
  return (
    <div>
      <LeftArrow />

      <div className='flex items-center justify-center text-2xl mb-20'>
        <i className='pr-2'></i>
        <h1>Order History</h1>
      </div>

      <ListComponent
        list={orders}
        Component={OrderComponent}
      />
    </div>
  );
};
