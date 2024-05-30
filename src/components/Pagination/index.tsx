import React from 'react';
import styles from './pagination.module.scss';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  handleClick: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, handleClick }) => {
  return (
    <div className={styles.pagination}>
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index + 1}
          onClick={() => handleClick(index + 1)}
          className={currentPage === index + 1 ? styles.active : ''}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
