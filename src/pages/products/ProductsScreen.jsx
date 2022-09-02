import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { IoBagAdd, IoHeartSharp } from 'react-icons/io5';

import { Navbar } from '../../components/Layout/Navbar/Navbar';
import { Carousel } from '../../components/UI/Carousel';
import { useProduct } from '../../hooks/useProduct';
import { useQuantity } from '../../hooks/useQuantity';
import { ButtonComponent } from '../../components/buttons/ButtonComponent';
import { cartAddNewItem } from '../../redux/actions/cartActions';

export const ProductsScreen = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const product = useProduct(productId);

  // TODO: including the seller info on the screen
  // prettier-ignore
  const { description, price, stock, title, category, thumbnail, images, id } = product.data;
  const { loading } = product;

  const { productQty, incrementQty, decrementQty } = useQuantity(
    1,
    stock
  );

  const handleAddNewItem = () =>
    dispatch(cartAddNewItem(product.data));

  const handleAddToFavorites = () => console.log('favorites'); //TODO: Create the logic to add to favorites

  return (
    <div className='p-3 flex flex-col items-center mb-10'>
      <Navbar navigationArrow={true} />

      {!loading && (
        <div className='flex flex-col mt-6 p-2 w-4/6 shadow-leever-shadow rounded-lg'>
          <div className='flex items-center'>
            <div className='w-10 h-10 rounded-full bg-red-500 mr-3 ml-2 mt-4 mb-6'></div>
            <h1 className='text-lg text-slate-600'>
              Sell Me Anything
            </h1>
          </div>

          {images && (
            <Carousel
              thumbnail={thumbnail}
              images={images}
              duration={3}
            />
          )}

          <div className='flex flex-col my-4'>
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
                <span className='text-xl text-gray-800'>
                  {productQty}
                </span>
                <button
                  className='text-xl px-2 text-slate-800'
                  onClick={incrementQty}
                >
                  +
                </button>
              </div>
            </div>

            <div className='flex flex-col my-3 mt-12 px-2'>
              <ButtonComponent
                Icon={IoBagAdd}
                onClick={handleAddNewItem}
              />

              <ButtonComponent
                Icon={IoHeartSharp}
                value='Add to Favorites'
                onClick={handleAddToFavorites}
              />
            </div>
            <h4 className='mt-6 text-sm text-slate-800 text-center'>
              {description}
            </h4>
          </div>
        </div>
      )}
    </div>
  );
};
