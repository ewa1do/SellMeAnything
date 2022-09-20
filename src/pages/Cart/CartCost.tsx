interface Props {
  shippingCost: number;
  subtotal: number;
  total: number;
}

export const CartCost = ({ shippingCost, subtotal, total }: Props) => {
  return (
    <>
      <div className='flex flex-col border-b py-3'>
        <hgroup className='flex justify-between px-4 my-1'>
          <h3 className='text-gray-500'>Subtotal</h3>
          <h6 className='text-sm font-semibold'>${subtotal}</h6>
        </hgroup>
        <hgroup className='flex justify-between px-4 my-1'>
          <h3 className='text-gray-500'>Shipping</h3>
          <h6 className='text-sm font-semibold'>${shippingCost}</h6>
        </hgroup>
      </div>
      <hgroup className='flex justify-between px-4 pt-4 items-center'>
        <h2>Total</h2>
        <h2 className='text-2xl'>
          <span className='text-sm text-gray-700'>US$</span> {total}
        </h2>
      </hgroup>
    </>
  );
};
