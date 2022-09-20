export const FavoriteItem = ({ desc, price, url }) => {
  return (
    <li className='flex justify-around my-4'>
      <img
        src={url}
        className='h-10'
      />
      <h3>{desc}</h3>
      <span>{price}</span>
    </li>
  );
};
