import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

/**
 *
 * @param  {element} icon - An icon for the UI - Must be a React Component
 * @param  {string} path - The router path you want to display
 * @returns {Component} A clickable icon to move on the navbar
 */

export const NavbarItem = ({ path, icon }) => {
  return (
    <Link
      to={`/${path}`}
      className='text-xl mx-2 cursor-pointer text-slate-700 hover:text-slate-900 duration-300'
    >
      <i>{icon}</i>
    </Link>
  );
};

NavbarItem.propTypes = {
  path: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};
