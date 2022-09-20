import { useDispatch } from 'react-redux';
import { cartAddNewItem } from '../../redux/actions/cartActions';

export const ButtonCard = ({ Icon, value, props }) => {
  const dispatch = useDispatch();

  const handleAddNewItem = () => {
    dispatch(cartAddNewItem(props));
  };

  return (
    <button
      className='flex items-center justify-center py-1 min-w-max bg-gray-800 rounded hover:bg-slate-900 duration-300 my-2'
      onClick={handleAddNewItem}
    >
      <span className='mx-4 text-slate-200'>{value}</span>
      <Icon className='text-slate-200 text-lg' />
    </button>
  );
};
