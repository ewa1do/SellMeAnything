import { useParams } from 'react-router-dom';

import { useAppDispatch } from '@/redux';
import { useProduct } from '@/hooks';

import { doAddNewItem } from '@/redux';
import { Navbar } from '@/components';
import { Product, ProductActions, ProductDescription, ProductImage, ProductName, ProductSeller } from './index';

export const ProductsScreen = () => {
  const dispatch = useAppDispatch();

  const { productId } = useParams<{ productId: string | undefined }>();

  const product = useProduct(productId);

  const handleAddNewItem = () => dispatch(doAddNewItem(product.data));
  const handleAddToFavorites = () => console.log('favorites');

  const { loading } = product;

  return (
    <div className='p-3 flex flex-col items-center mb-10'>
      <Navbar navigationArrow />

      {!loading && (
        <Product product={product.data}>
          <ProductSeller />
          <ProductImage {...product.data} />
          <ProductName {...product.data} />
          <ProductActions actions={[handleAddNewItem, handleAddToFavorites]} />
          <ProductDescription description={product.data.description} />
        </Product>
      )}
    </div>
  );
};
