import { useEffect, useState } from 'react';

export const useSearch = (query = '') => {
  const [searchState, setSearchState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    if (query?.length < 3) return;

    const searchData = async () => {
      const res = await fetch(
        `https://dummyjson.com/products/search?q=${query}`
      );
      const body = await res.json();

      setSearchState({
        data: [...body.products],
        loading: false,
      });
    };

    searchData();
  }, [query]);

  return searchState;
};
