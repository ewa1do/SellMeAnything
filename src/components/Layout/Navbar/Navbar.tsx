import { SearchInput } from '../../inputs/SearchInput';
import { LeftArrow } from '../../navigation/LeftArrow';
import { LinkToHomePage } from '../../navigation/LinkToHomePage';

interface Props {
  navigationArrow?: boolean;
  children: React.ReactElement | React.ReactElement[];
}

export const Navbar = ({ navigationArrow, children }: Props): JSX.Element => {
  return (
    <div className='flex flex-row items-center'>
      {navigationArrow ? <LeftArrow /> : <LinkToHomePage />}
      <SearchInput />

      <div className='flex flex-row ml-24'>{children}</div>
    </div>
  );
};
