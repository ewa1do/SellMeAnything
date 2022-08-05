import { IoBagAdd } from 'react-icons/io5';
import { shortParagraph } from '../../utilities/shortParagraph';
import { ButtonCard } from '../buttons/ButtonCard';

export const ItemCard = ({ desc, url, title, price }) => {
  return (
    <div className='flex flex-col p-4 border-2 border-slate-300 rounded my-8 w-4/5 shadow-lg'>
      <div className='flex justify-between'>
        <div>
          <h3 className='text-2xl font-semibold'>{title}</h3>
          <span className='text-xs w-48 inline-block text-slate-800'>
            {desc.split(' ').length > 9
              ? shortParagraph(desc)
              : desc}
            {desc.split(' ').length > 9 && (
              <a className='text-blue-900 cursor-pointer'>
                {' '}
                see more...
              </a>
            )}
          </span>
        </div>

        <h5 className='text-3xl font-semibold'>${price}</h5>
      </div>

      <div className='flex flex-col'>
        <img
          src={url}
          className='w-5/5 py-4'
        />

        <ButtonCard
          Icon={IoBagAdd}
          value='add to cart'
        />
      </div>
    </div>
  );
};
