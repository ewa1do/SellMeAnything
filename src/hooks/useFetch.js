import { useEffect, useState } from 'react';
import { fetchData } from '../utilities/fetchData';

/**
 *
 * @param {string} category Endpoint of the api eg. 'products'
 * @param {number} limit The items number you want to receive
 * @returns An API data response
 */

export const useFetch = (category = 'products', limit, skip) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    fetchData(category, { limit, skip }).then((prods) => {
      setState({
        data: prods,
        loading: false,
      });
    });
  }, [category]);
  return state;
};
