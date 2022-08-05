export const ButtonCard = ({ Icon, value }) => {
  return (
    <button className='flex items-center justify-center py-1 min-w-max bg-gray-900 rounded hover:bg-slate-900 duration-300'>
      <span className='mx-4 text-slate-200'>{value}</span>
      <Icon className='text-slate-200 text-lg' />
    </button>
  );
};
