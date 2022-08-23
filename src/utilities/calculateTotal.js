export const calculateSubtotalShippingAndTotal = (arr = []) => {
  let subtotal = 0;
  arr.forEach((item) => {
    subtotal += item.price * item.qty;
  });
  const shippingCost = subtotal * 0.03;
  const total = subtotal + shippingCost;
  return [
    subtotal.toFixed(2),
    shippingCost.toFixed(2),
    total.toFixed(2),
  ];
};
