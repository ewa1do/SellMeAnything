import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';

export const Category = ({ title, path }) => {
  return (
    <div className='mt-10'>
      <h1 className='font-semibold'>{title}</h1>
      <Link to={path}>
        <div className='h-80 w-9/12 ml-4 mt-2 bg-red-300 rounded-md'></div>
      </Link>
    </div>
  );
};

Category.propTypes = {
  title: Proptypes.string,
};
