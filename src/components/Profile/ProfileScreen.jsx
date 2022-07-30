import {
  IoPersonCircleSharp,
  IoBagOutline,
  IoHeartOutline,
  IoPricetagOutline,
  IoLogOutOutline,
} from 'react-icons/io5';
import { ActionButtonWithIcon } from '../UI/ActionButtonWithIcon';

import { LeftArrow } from '../UI/LeftArrow';

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
          <li className='flex my-6 items-center text-xl'>
            <i>
              <IoBagOutline />
            </i>
            <span className='ml-3'>My Orders</span>
          </li>
          <li className='flex my-6 items-center text-xl'>
            <i>
              <IoHeartOutline />
            </i>
            <span className='ml-3'>Favorites</span>
          </li>
          <li className='flex my-4 items-center text-xl'>
            <i>
              <IoPricetagOutline />
            </i>
            <span className='ml-3'>My Sells</span>
          </li>
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
