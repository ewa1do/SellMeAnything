import { useNavigate } from 'react-router-dom';

import {
  IoArrowBackSharp,
  IoPersonCircleSharp,
  IoBagOutline,
  IoHeartOutline,
  IoPricetagOutline,
  IoLogOutOutline,
} from 'react-icons/io5';

export const ProfileScreen = () => {
  const navigate = useNavigate();

  const goToPreviousScreen = () => {
    navigate(-1);
  };

  return (
    <div>
      <div className='my-3 mx-3'>
        <span
          className='text-2xl cursor-pointer'
          onClick={goToPreviousScreen}
        >
          <IoArrowBackSharp />
        </span>
      </div>
      <div className='my-16 flex flex-col items-center'>
        <span className='my-3 text-8xl'>
          <IoPersonCircleSharp />
        </span>
        <h2 className='text-2xl'>John Doe</h2>
      </div>
      <div className='ml-16 max-w-fit'>
        <ul>
          <li className='flex my-6 items-center text-xl'>
            <i>
              <IoBagOutline />
            </i>
            <span className='ml-3'>Buy History</span>
          </li>
          <li className='flex my-6 items-center text-xl'>
            <i>
              <IoHeartOutline />
            </i>
            <span className='ml-3'>Favorites</span>
          </li>
          <li className='flex my-4 items-center text-xl'>
            <i>
              <IoPricetagOutline />
            </i>
            <span className='ml-3'>My Sells</span>
          </li>
        </ul>
      </div>
      <div className='flex justify-center mt-16'>
        <button className='flex items-center text-xl text-slate-200 bg-slate-700 px-5 py-1 rounded-2xl'>
          <i>
            <IoLogOutOutline />
          </i>
          Log Out
        </button>
      </div>
    </div>
  );
};
