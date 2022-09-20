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
    <div className='my-3 mx-2 flex'>
      <span
        className='text-md cursor-pointer italic border-2 border-slate-900 p-1 rounded-lg'
        onClick={goToHomePage}
      >
        SMA
      </span>
    </div>
  );
};
