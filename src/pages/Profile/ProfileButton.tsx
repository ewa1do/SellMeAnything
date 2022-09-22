import { IoLogOutOutline } from 'react-icons/io5';
import { ActionButtonWithIcon } from '@/components/buttons/';

export const ProfileButton = () => {
  return (
    <div className='flex justify-center mt-16'>
      <ActionButtonWithIcon
        Icon={IoLogOutOutline}
        value='Log out'
      />
    </div>
  );
};
