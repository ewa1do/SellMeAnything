export const CartItem = ({ desc, price, qty, url }) => {
  return (
    <li className='flex justify-around my-4'>
      <img
        src={url}
        className='h-10'
      />
      <h3>{desc}</h3>
      <span>{qty}</span>
      <span>{price}</span>
    </li>
  );
};
