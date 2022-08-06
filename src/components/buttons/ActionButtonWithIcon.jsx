import PropTypes from 'prop-types';

/**
 * @param {string} value - Placeholder for the button
 * @param {element} Icon - The Icon must be a React Component
 * @returns A button component with an Icon and a value
 */

export const ActionButtonWithIcon = ({ Icon, value }) => {
  return (
    <button className='flex items-center text-xl text-slate-200 bg-slate-700 px-5 py-1 rounded-2xl'>
      <i className='pr-3'>
        <Icon />
      </i>
      {value}
    </button>
  );
};

ActionButtonWithIcon.propTypes = {
  value: PropTypes.string.isRequired,
  Icon: PropTypes.func.isRequired,
};
