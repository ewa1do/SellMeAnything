import Proptypes from 'prop-types';

export const ButtonComponent = ({
  Icon,
  value,
  className,
  onClick,
}) => {
  return (
    <button
      className={className}
      onClick={onClick}
    >
      <span className='mx-4 text-slate-200'>{value}</span>
      <Icon className='text-slate-200 text-lg' />
    </button>
  );
};

ButtonComponent.defaultProps = {
  className: `flex items-center justify-center py-1 min-w-max 
    bg-gray-800 rounded hover:bg-slate-900 duration-300 my-2`,
  value: 'Add to Bag',
};

ButtonComponent.propTypes = {
  Icon: Proptypes.func,
  value: Proptypes.string,
  className: Proptypes.string.isRequired,
  onClick: Proptypes.func.isRequired,
};
