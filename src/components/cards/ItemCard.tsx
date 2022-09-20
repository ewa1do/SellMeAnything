import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { IoBagAdd } from 'react-icons/io5';

import { shortParagraph } from '../../utilities/shortParagraph';

import { cartAddNewItem } from '../../redux/actions/cartActions';
import { ButtonComponent } from '../buttons/ButtonComponent';

export const ItemCard = (props) => {
  const { desc, url: thumbnail, title, price, id } = props;

  const dispatch = useDispatch();

  const handleAddNewItem = () => {
    dispatch(cartAddNewItem(props));
  };

  return (
    <div className='flex flex-col p-4 border-2 border-slate-300 rounded-md my-8 w-4/5 shadow-lg'>
      <div className='flex justify-between'>
        <Link to={`/product/${id}`}>
          <div>
            <h3 className='text-2xl font-semibold'>{title}</h3>
            <span className='text-xs w-48 inline-block text-slate-800'>
              {desc.split(' ').length > 9
                ? shortParagraph(desc)
                : desc}
              {desc.split(' ').length > 9 && (
                <span className='text-blue-900 cursor-pointer'>
                  {' '}
                  see more...
                </span>
              )}
            </span>
          </div>
        </Link>

        <h5 className='text-3xl font-semibold'>${price}</h5>
      </div>

      <div className='flex flex-col'>
        <Link to={`/product/${id}`}>
          <img
            src={thumbnail}
            className='py-4 w-5/5 min-h-80'
          />
        </Link>

        <ButtonComponent
          Icon={IoBagAdd}
          value='Add to Bag'
          onClick={handleAddNewItem}
        />
      </div>
    </div>
  );
};
