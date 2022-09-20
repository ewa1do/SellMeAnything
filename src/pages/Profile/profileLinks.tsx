import { IoPersonCircleSharp, IoHeartOutline, IoPricetagOutline } from 'react-icons/io5';
import { Props as ProfileKeys } from '../../components/lists/ListToScreenWIthIcon';

export const profileLinks: Array<ProfileKeys> = [
  {
    Icon: <IoPersonCircleSharp />,
    path: '/orders',
    value: 'My Orders',
  },
  {
    Icon: <IoHeartOutline />,
    path: '/favs',
    value: 'Favorites',
  },
  {
    Icon: <IoPricetagOutline />,
    path: '/sells',
    value: 'My Sells',
  },
];
