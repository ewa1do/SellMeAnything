import { useSelector } from 'react-redux';

import { useAppSelector } from '../../redux/hooks';

import { calculateSubtotalShippingAndTotal } from '../../utilities/calculateTotal';
import { Cart, CartButton, CartCost, CartProducts, CartScreenEmpty } from './index';
import { LeftArrow } from '../../components/navigation/LeftArrow';
import { Product, State } from '../../interfaces';

export const CartScreen = () => {
  // TODO: Fix the selector, (typing redux)
  const { items: cartItems } = useAppSelector((state) => state.cart);

  const [subtotal, shippingCost, total] = calculateSubtotalShippingAndTotal<Product>(cartItems);

  return (
    <>
      <LeftArrow />

      {cartItems.length !== 0 ? (
        <Cart>
          <CartProducts products={cartItems} />

          <CartCost
            shippingCost={shippingCost}
            subtotal={subtotal}
            total={total}
          />

          <CartButton />
        </Cart>
      ) : (
        <CartScreenEmpty />
      )}
    </>
  );
};
