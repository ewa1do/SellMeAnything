import Proptypes from 'prop-types';
import { v4 as uuid } from 'uuid';

import { useFetch } from '../../hooks/useFetch';
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
}) => {
  const { data, loading } = useFetch(category, 5);

  return (
    <ul className={center ? 'flex flex-col items-center' : ''}>
      {category && loading && <Spinner />}

      {category
        ? data.map((item) => {
            return (
              <Component
                key={uuid()}
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
  );
};

ListComponent.propTypes = {
  list: Proptypes.arrayOf(Proptypes.object),
  category: Proptypes.string,
  center: Proptypes.bool,
  Component: Proptypes.func.isRequired,
};
