import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';

/**
 *
 * @param {string} title The title for the category
 * @param {string} path A path for the router
 * @param {string} thumbnail The thumbnail for the card
 * @returns A Card component for categories
 */

export const Category = ({ title, path, thumbnail }) => {
  return (
    <div className='mt-10 py-8'>
      <Link to={path}>
        <h1 className='font-semibold text-2xl'>{title}</h1>
        <div className='h-80 w-10/12 ml-10 mt-2 rounded-md'>
          <img src={thumbnail} />
        </div>
      </Link>
    </div>
  );
};

Category.propTypes = {
  title: Proptypes.string.isRequired,
  path: Proptypes.string,
  thumbnail: Proptypes.string,
};
