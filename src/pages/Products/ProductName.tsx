import { useQuantity } from '@/hooks/';

interface Props {
  price: number;
  title: string;
  stock: number;
}

export const ProductName = ({ price, title, stock }: Props) => {
  const { decrementQty, incrementQty, productQty } = useQuantity(1, stock);

  return (
    <div className='flex justify-between'>
      <div>
        <h2 className='text-3xl ml-2'>{title}</h2>
        <h3 className='text-xl ml-2'>US$ {price}</h3>
      </div>

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
    </div>
  );
};
