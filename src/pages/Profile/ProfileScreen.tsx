import { LeftArrow } from '../../components/navigation/LeftArrow';
import { Profile, ProfileActions, ProfileButton, ProfileUser } from './index';

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
