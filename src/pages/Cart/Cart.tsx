import { HOCProps } from '../../interfaces';

export const Cart = ({ children }: HOCProps) => (
  <div className='flex flex-col items-center py-6'>
    <div className='flex flex-col justify-center w-5/6 shadow-leever-shadow rounded-md'>{children}</div>
  </div>
);
