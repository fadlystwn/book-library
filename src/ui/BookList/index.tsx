"use client"
import React from 'react';
import styles from './booklist.module.scss';
import BookCard from '@/ui/BookCard';
import { books } from '@/data/books';
import usePagination from '@/hooks/usePagination';
import Pagination from '@/components/Pagination';

const BookList = () => {
  const booksPerPage: number = 5;
  const { currentPage, totalPages, currentItems, handleClick } = usePagination(books, booksPerPage);

  return (
    <div className={styles.bookListContainer}>
      <div className={styles.bookList}>
        {currentItems.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} handleClick={handleClick} />
    </div>
  );
};

export default BookList;
