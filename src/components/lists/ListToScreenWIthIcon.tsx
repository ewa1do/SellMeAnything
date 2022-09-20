import { Link } from 'react-router-dom';

export interface Props {
  Icon: JSX.Element;
  path: string;
  value: string;
}

export const ListToScreenWIthIcon = ({ path, Icon, value }: Props) => {
  return (
    <Link to={path}>
      <li className='flex my-6 items-center text-xl'>
        <i>{Icon}</i>
        <span className='ml-3'>{value}</span>
      </li>
    </Link>
  );
};
