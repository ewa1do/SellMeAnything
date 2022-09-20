import { ListToScreenWIthIcon } from '../../components/lists/ListToScreenWIthIcon';
import { profileLinks } from './profileLinks';

export const ProfileActions = (): JSX.Element => {
  return (
    <div className='ml-16 max-w-fit'>
      <ul>
        {profileLinks.map(({ Icon, path, value }) => (
          <ListToScreenWIthIcon
            key={path}
            path={path}
            Icon={Icon}
            value={value}
          />
        ))}
      </ul>
    </div>
  );
};
