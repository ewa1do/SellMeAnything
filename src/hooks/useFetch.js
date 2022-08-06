import { useEffect, useState } from 'react';
import { fetchData } from '../utilities/fetchData';

export const useFetch = (category = 'products', limit) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    fetchData(category, limit).then((prods) => {
      setState({
        data: prods,
        loading: false,
      });
    });
  }, [category]);
  return state;
};
