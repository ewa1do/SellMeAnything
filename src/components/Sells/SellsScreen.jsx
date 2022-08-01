import { LeftArrow } from '../UI/LeftArrow';
import { ListComponent } from '../UI/ListComponent';
import { SellsComponent } from './SellsComponent';

import { orders } from '../../helpers/itemList.js';

export const SellsScreen = () => {
  return (
    <div>
      <LeftArrow />

      <div className='flex items-center justify-center text-2xl mb-20'>
        <i className='pr-2'></i>
        <h1>Sells</h1>
      </div>

      <ListComponent
        list={orders}
        Component={SellsComponent}
      />
    </div>
  );
};
