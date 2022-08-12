import { useState } from 'react';
import Proptypes from 'prop-types';

/**
 *
 * @param {number} limit The limit of the counter
 * @returns A state counter of any item, useful for products
 */

export const useQuantity = (limit) => {
  const [productQty, setProductQty] = useState(1);

  const incrementQty = () => setProductQty(productQty + 1);

  const decrementQty = () => setProductQty(productQty - 1);

  const resetQty = () => setProductQty(1);

  if (productQty < 1 || productQty > limit) resetQty();

  return {
    productQty,
    incrementQty,
    decrementQty,
  };
};

useQuantity.propTypes = {
  limit: Proptypes.number.isRequired,
};
