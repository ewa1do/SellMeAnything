import Proptypes from 'prop-types';

export const Category = ({ title }) => {
  return (
    <div className='mt-10'>
      <h1 className='font-semibold'>{title}</h1>
      <div className='h-80 w-9/12 ml-4 mt-2 bg-red-300 rounded-md'></div>
    </div>
  );
};

Category.propTypes = {
  title: Proptypes.string,
};
