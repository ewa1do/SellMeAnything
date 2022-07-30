import Proptypes from 'prop-types';

/**
 *
 * @param {string} placeholder The text show wanna show in the label and in the input
 * @param {string} type The input type
 * @returns An input component with an animation
 */

export const InputComponent = ({ placeholder, type }) => {
  // TODO: Create an animation when the input is focused

  return (
    <div className='flex flex-col my-4'>
      <label>{placeholder}</label>
      <input
        type={type}
        className='border-b border-solid border-gray-800 outline-none ml-4'
        placeholder={placeholder}
      />
    </div>
  );
};

InputComponent.propTypes = {
  placeholder: Proptypes.string.isRequired,
  type: Proptypes.string.isRequired,
};
