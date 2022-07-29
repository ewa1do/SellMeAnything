import { useNavigate } from 'react-router-dom';
import { IoArrowBackSharp } from 'react-icons/io5';

/**
 *
 * @returns An arrow component, which goes to the previous screen when clicked.
 */
export const LeftArrow = () => {
  const navigate = useNavigate();

  const goToPreviousScreen = () => {
    navigate(-1);
  };

  return (
    <div className='my-3 mx-3'>
      <span
        className='text-2xl cursor-pointer'
        onClick={goToPreviousScreen}
      >
        <IoArrowBackSharp />
      </span>
    </div>
  );
};
