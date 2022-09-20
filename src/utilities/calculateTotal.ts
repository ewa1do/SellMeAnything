/**
 *
 * @param {array} arr Array of objects to map the price and the quantity
 * @returns An array containing the subtotal, the shoppingCost and the total of the cart
 */

export const calculateSubtotalShippingAndTotal = (arr = []) => {
  let subtotal = 0;

  arr.forEach((item) => {
    subtotal += item.price * item.qty;
  });

  const shippingCost = subtotal * 0.03;
  const total = subtotal + shippingCost;

  return [subtotal, shippingCost, total].map((price) =>
    price.toFixed(2)
  );
};
