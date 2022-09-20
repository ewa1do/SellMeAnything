/**
 *
 * @param {array} arr Array of objects to map the price and the quantity
 * @returns An array containing the subtotal, the shoppingCost and the total of the cart
 */

interface Args {
  price: number;
  qty: number;
}

export const calculateSubtotalShippingAndTotal = <T extends Args>(arr: T[]): number[] => {
  let subtotal = 0;

  arr.map(({ price, qty }) => (subtotal += price * qty));

  const shippingCost = subtotal * 0.03;
  const total = subtotal + shippingCost;

  return [subtotal, shippingCost, total].map((num) => Number(num.toFixed(2)));
};
