import { useEffect, useState } from 'react';

export const useSearch = (query) => {
  const [searchState, setSearchState] = useState({});

  useEffect(() => {
    if (query?.length < 3) return;

    const searchData = async () => {
      const res = await fetch(
        `https://dummyjson.com/products/search?q=${query}`
      );
      const body = await res.json();

      setSearchState({ ...body.products });
    };

    searchData();
  }, [query]);

  return searchState;
};
