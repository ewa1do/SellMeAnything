import { useNavigate } from 'react-router-dom';

/**
 *
 * @returns A reusable link to the App HomePage
 */

export const LinkToHomePage = () => {
  // TODO: Create a logo for the component
  const navigate = useNavigate();
  const goToHomePage = () => navigate('/', { replace: true });

  return (
    <div className='my-3 mx-3 flex'>
      <span
        className='text-md cursor-pointer'
        onClick={goToHomePage}
      >
        LOGO
      </span>
    </div>
  );
};
