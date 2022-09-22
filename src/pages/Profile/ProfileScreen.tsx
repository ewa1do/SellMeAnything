import { LeftArrow } from '@/components/navigation/';
import { Profile, ProfileActions, ProfileButton, ProfileUser } from './';

export const ProfileScreen = () => {
  return (
    <>
      <LeftArrow />

      <Profile>
        <ProfileUser />
        <ProfileActions />
        <ProfileButton />
      </Profile>
    </>
  );
};
