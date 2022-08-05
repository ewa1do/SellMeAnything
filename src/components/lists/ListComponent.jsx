import Proptypes from 'prop-types';
import { v4 as uuid } from 'uuid';
import { useFetch } from '../../hooks/useFetch';

/**
 *
 * @param {object[]} list An Object's Array
 * @param {Component} Component A Component to be iterable in the List
 * @param {category} category A category of the API
 * @returns An Unordered List of React Components
 */

export const ListComponent = ({ category, list, Component }) => {
  const { data, loading } = useFetch(category);

  return (
    <ul>
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
  list: Proptypes.arrayOf(Proptypes.object).isRequired,
  Component: Proptypes.func.isRequired,
};
