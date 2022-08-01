import { IoCheckmarkSharp } from 'react-icons/io5';

export const OrderComponent = ({ date, desc, total }) => {
  return (
    <li className='flex justify-around my-4'>
      <i>
        <IoCheckmarkSharp />
      </i>
      <h3>{desc}</h3>
      <span>{date}</span>
      <span>{total}</span>
    </li>
  );
};
