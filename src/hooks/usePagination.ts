import { useState } from 'react';
import { useAllProducts } from '@/hooks';

export const usePagination = (itemsPerPage: number = 5) => {
  const { data, loading } = useAllProducts();

  const [currentPage, setCurrentPage] = useState<number>(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return {
    data,
    loading,
    currentItems,
    itemsPerPage,
    currentPage,
    paginate,
  };
};
