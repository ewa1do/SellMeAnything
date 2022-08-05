import { useEffect, useState } from 'react';
import { fetchData } from '../utilities/fetchData';

export const useFetch = (category = 'products') => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    fetchData(category).then((prods) => {
      setState({
        data: prods,
        loading: false,
      });
    });
  }, [category]);
  return state;
};
