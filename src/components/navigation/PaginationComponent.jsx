import { range } from '../../utilities/range';
import { PaginationButton } from './PaginationButton';

export const PaginationComponent = ({
  totalItems,
  itemsPerPage,
  paginate,
}) => {
  const totalPageCount = Math.ceil(totalItems / itemsPerPage);
  const pageNumbers = range(1, totalPageCount);

  return (
    <ul className='flex py-6 justify-center'>
      {pageNumbers.map((page) => {
        return (
          <PaginationButton
            key={page}
            page={page}
            paginate={paginate}
          />
        );
      })}
    </ul>
  );
};
