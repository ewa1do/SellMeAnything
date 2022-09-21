import { IoBagOutline, IoPersonOutline } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { useProduct } from '../../hooks/useProduct';

import { cartAddNewItem } from '../../redux/actions/cartActions';
import { Navbar } from '../../components/Layout/Navbar/Navbar';
import { NavbarItem } from '../../components/Layout/Navbar';
import { Product, ProductActions, ProductDescription, ProductImage, ProductName, ProductSeller } from './index';

export const ProductsScreen = () => {
  const dispatch = useDispatch();
  const { productId } = useParams<{ productId: string }>();
  const product = useProduct(productId);

  const { description, price, stock, title, category, thumbnail, images, id } = product.data;

  const { loading } = product;

  const handleAddNewItem = () => dispatch(cartAddNewItem(product.data));
  const handleAddToFavorites = () => console.log('favorites');

  return (
    <div className='p-3 flex flex-col items-center mb-10'>
      <Navbar navigationArrow>
        <NavbarItem
          path='profile'
          Icon={<IoPersonOutline />}
        />
        <NavbarItem
          path='cart'
          Icon={<IoBagOutline />}
        />
      </Navbar>

      {!loading && (
        <Product>
          <ProductSeller />
          <ProductImage
            images={images}
            thumbnail={thumbnail}
          />
          <ProductName
            price={price}
            stock={stock}
            title={title}
          />
          <ProductActions actions={[handleAddNewItem, handleAddToFavorites]} />
          <ProductDescription description={description} />
        </Product>
      )}
    </div>
  );
};
