export const PaginationButton = ({ page, paginate }) => {
  return (
    <li
      className='px-4 border border-slate-300 text-slate-600 cursor-pointer 
      hover:bg-slate-200 hover:duration-200'
      onClick={() => paginate(page)}
    >
      <button>{page}</button>
    </li>
  );
};
