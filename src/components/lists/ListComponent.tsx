import Proptypes from 'prop-types';
import { v4 as uuid } from 'uuid';

import { usePagination } from '../../hooks/usePagination';
import { PaginationComponent } from '../navigation/PaginationComponent';
import { Spinner } from '../UI/Spinner';

/**
 * @param {object[]} list An Object's Array
 * @param {Component} Component A Component to be iterable in the List
 * @param {string} category A category of the API
 * @param {boolean} center Center the list
 * @returns An Unordered List of React Components
 */

export const ListComponent = ({
  category,
  center = false,
  list,
  Component,
  pagination = false,
}) => {
  const { data, loading, currentItems, itemsPerPage, paginate } =
    usePagination(category);

  return (
    <>
      <ul className={center ? 'flex flex-col items-center' : ''}>
        {category && loading && <Spinner />}

        {category
          ? currentItems.map((item, i) => {
              return (
                <Component
                  key={item.id}
                  {...item}
                />
              );
            })
          : list.map((item) => {
              return (
                <Component
                  key={uuid()}
                  {...item}
                />
              );
            })}
      </ul>

      {pagination && (
        <PaginationComponent
          totalItems={data.length}
          itemsPerPage={itemsPerPage}
          paginate={paginate}
        />
      )}
    </>
  );
};

ListComponent.propTypes = {
  list: Proptypes.arrayOf(Proptypes.object),
  category: Proptypes.string,
  center: Proptypes.bool,
  Component: Proptypes.func.isRequired,
};
