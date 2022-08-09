import { useState } from 'react';
import { useFetch } from './useFetch';

export const usePagination = (category) => {
  const { data, loading } = useFetch(category);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = data.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return {
    data,
    loading,
    currentItems,
    itemsPerPage,
    currentPage,
    paginate,
  };
};
