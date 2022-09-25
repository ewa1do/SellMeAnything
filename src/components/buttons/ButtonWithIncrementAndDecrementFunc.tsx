import { useQuantity } from '../../hooks/useQuantity';

export const ButtonWithIncrementAndDecrementFunc = ({ initialValue, limit }) => {
  const { productQty, incrementQty, decrementQty } = useQuantity(initialValue, limit);

  return (
    <div className='flex items-center mr-2 mt-2 border-2 border-gray-600 rounded-md h-12'>
      <button
        className='text-xl px-2 text-slate-800'
        onClick={decrementQty}
      >
        -
      </button>
      <span className='text-xl text-gray-800'>{productQty}</span>
      <button
        className='text-xl px-2 text-slate-800'
        onClick={incrementQty}
      >
        +
      </button>
    </div>
  );
};
