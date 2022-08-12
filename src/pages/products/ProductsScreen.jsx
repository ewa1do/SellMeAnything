import { useParams } from 'react-router-dom';

import { Navbar } from '../../components/Layout/Navbar/Navbar';
import { useProduct } from '../../hooks/useProduct';

export const ProductsScreen = () => {
  const { productId } = useParams();

  const product = useProduct(productId);

  const { loading } = product;

  const {
    description,
    images,
    price,
    stock,
    thumbnail,
    title,
    category,
  } = product.data;

  return (
    <div className='p-3 flex flex-col items-center mb-10'>
      <Navbar navigationArrow={true} />

      <div className='flex flex-col mt-6 p-2 w-4/6 shadow-leever-shadow rounded-lg'>
        <div className='flex items-center'>
          <div className='w-10 h-10 rounded-full bg-red-500 mr-3 ml-2 mt-4 mb-6'></div>
          <h1 className='text-lg text-slate-600'>
            Sell Me Anything
          </h1>
        </div>

        <picture className='flex justify-center'>
          <img
            src={thumbnail}
            className='w-70 h-48'
          />
        </picture>

        <div className='flex flex-col my-4'>
          <div className='flex justify-between'>
            <div>
              <h2 className='text-3xl ml-2'>{title}</h2>
              <h3 className='text-xl ml-2'>US$ {price}</h3>
            </div>

            <div className='mr-2 mt-2 border-2 border-gray-600 rounded-md h-12'>
              <button className='text-2xl px-2 text-slate-800'>
                -
              </button>
              <span className='text-xl text-gray-800'>1</span>
              <button className='text-xl px-2 text-slate-800'>
                +
              </button>
            </div>
          </div>

          <div className='flex flex-col my-3 mt-12 px-2'>
            <button className='bg-gray-800 text-slate-200 py-1 w-full my-2 rounded'>
              Add to bag
            </button>
            <button className='w-full py-1 bg-gray-800 text-slate-200 rounded'>
              Add to Favorites
            </button>
          </div>
          <h4 className='mt-6 text-sm text-slate-800 text-center'>
            {description}
          </h4>
        </div>
      </div>
    </div>
  );
};
