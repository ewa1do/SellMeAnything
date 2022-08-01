import Proptypes from 'prop-types';
import { v4 as uuid } from 'uuid';

/**
 *
 * @param {object[]} list An Object's Array
 * @param {Component} Component A Component to be iterable in the List
 * @returns An Unordered List of React Components
 */

export const ListComponent = ({ list, Component }) => {
  return (
    <ul>
      {list.map((item) => {
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
