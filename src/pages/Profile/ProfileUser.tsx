import { IoPersonCircleSharp } from 'react-icons/io5';

export const ProfileUser = (): JSX.Element => {
  return (
    <div className='my-16 flex flex-col items-center'>
      <span className='my-3 text-8xl'>
        <IoPersonCircleSharp />
      </span>
      <h2 className='text-2xl'>John Doe</h2>
    </div>
  );
};
