import { useSelector } from 'react-redux';

import { calculateSubtotalShippingAndTotal } from '../../utilities/calculateTotal';
import { Cart, CartButton, CartCost, CartProducts, CartScreenEmpty } from './index';
import { LeftArrow } from '../../components/navigation/LeftArrow';
import { Product, State } from '../../interfaces';

export const CartScreen = () => {
  const cartItems = useSelector((state: State) => state.cart.items);

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
