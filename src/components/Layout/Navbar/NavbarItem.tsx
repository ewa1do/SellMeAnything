import { Link } from 'react-router-dom';

/**
 * @param  {element} icon - An icon for the UI - Must be a React Component
 * @param  {string} path - The router path you want to display
 * @returns {Component} A clickable icon to move on the navbar
 */

interface Props {
  path: string;
  Icon: JSX.Element;
}

export const NavbarItem = ({ path, Icon }: Props): JSX.Element => {
  return (
    <Link
      to={`/${path}`}
      className='text-xl mx-2 cursor-pointer text-slate-700 hover:text-slate-900 duration-300'
    >
      <i>{Icon}</i>
    </Link>
  );
};
