import { useState } from 'react';

const usePagination = (items: any[], itemsPerPage: number) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(items?.length / itemsPerPage);

  const handleClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items?.slice(indexOfFirstItem, indexOfLastItem);

  return {
    currentPage,
    totalPages,
    currentItems,
    handleClick,
  };
};

export default usePagination;
