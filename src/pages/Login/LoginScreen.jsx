import { Link } from 'react-router-dom';

export const LoginScreen = () => {
  return (
    <div className='container bg-login-sm bg-cover h-screen flex flex-col justify-center items-center contrast-100'>
      <div className='text-6xl font-semibold text-white stroke-black drop-shadow-xl'>
        <h1 className='stroke-black drop-shadow-2xl'>SELL</h1>
        <h1>ME</h1>
        <h1>ANY</h1>
        <h1>THING</h1>
      </div>
      <div className='flex flex-col'>
        <button className='p-1 px-12 my-4  font-semibold bg-white rounded-xl w-full'>
          SIGN IN
        </button>
        <button className='p-1 px-12 bg-black text-slate-50 rounded-xl'>
          <Link to='/register'>CREATE ACCOUNT</Link>
        </button>
        <span className='my-2 text-center text-slate-50 underline cursor-pointer'>
          Continue As Guest
        </span>
      </div>
    </div>
  );
};
