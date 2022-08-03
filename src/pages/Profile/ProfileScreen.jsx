import {
  IoPersonCircleSharp,
  IoBagOutline,
  IoHeartOutline,
  IoPricetagOutline,
  IoLogOutOutline,
} from 'react-icons/io5';

import { ActionButtonWithIcon } from '../UI/ActionButtonWithIcon';
import { LeftArrow } from '../UI/LeftArrow';
import { ListToScreenWIthIcon } from '../UI/ListToScreenWIthIcon';

export const ProfileScreen = () => {
  return (
    <div>
      <LeftArrow />
      <div className='my-16 flex flex-col items-center'>
        <span className='my-3 text-8xl'>
          <IoPersonCircleSharp />
        </span>
        <h2 className='text-2xl'>John Doe</h2>
      </div>
      <div className='ml-16 max-w-fit'>
        <ul>
          <ListToScreenWIthIcon
            path='/orders'
            icon={<IoBagOutline />}
            value='My Orders'
          />

          <ListToScreenWIthIcon
            path='/favs'
            icon={<IoHeartOutline />}
            value='Favorites'
          />

          <ListToScreenWIthIcon
            path='/sells'
            icon={<IoPricetagOutline />}
            value='My Sells'
          />
        </ul>
      </div>
      <div className='flex justify-center mt-16'>
        <ActionButtonWithIcon
          icon={<IoLogOutOutline />}
          value='Log out'
        />
      </div>
    </div>
  );
};
