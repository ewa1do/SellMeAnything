import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const ListToScreenWIthIcon = ({ path, icon, value }) => {
  return (
    <Link to={path}>
      <li className='flex my-6 items-center text-xl'>
        <i>{icon}</i>
        <span className='ml-3'>{value}</span>
      </li>
    </Link>
  );
};

ListToScreenWIthIcon.propTypes = {
  icon: PropTypes.element,
  value: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};
