import { useAppSelector } from '@/redux';

interface ProductProps {
  price: number;
  title: string;
  stock: number;
}

export const ProductName = ({ price, title, stock }: ProductProps) => {
  // const { decrementQty, incrementQty, productQty } = useQuantity(1, stock);

  const selector = useAppSelector((state) => state.cart);

  // console.log(selector);

  // const { productState } = useContext(ProductContext);

  // console.log('context', productState);

  // const [qty, setQty] = useState(1);
  // const [quantity, setQuantity] = useState<ContextProduct>(context);

  // console.log('qty: => ', quantity);

  // function increment() {
  //   setQty(qty + 1);
  //   setQuantity({ ...quantity, qty: qty + 1 });
  // }

  return (
    <div className='flex justify-between'>
      <div>
        <h2 className='text-3xl ml-2'>{title}</h2>
        <h3 className='text-xl ml-2'>US$ {price}</h3>
      </div>

      <div className='flex items-center mr-2 mt-2 border-2 border-gray-600 rounded-md h-12'>
        <button
          className='text-xl px-2 text-slate-800'
          // onClick={decrementQty}
        >
          -
        </button>
        <span className='text-xl text-gray-800'>{1}</span>
        <button
          className='text-xl px-2 text-slate-800'
          // onClick={incrementQty}
          // onClick={increment}
        >
          +
        </button>
      </div>
    </div>
  );
};
