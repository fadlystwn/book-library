"use client";
import { useState, useEffect } from 'react';
import axios from 'axios';
import useSWR from 'swr';
import styles from './booklist.module.scss';
import BookCard from '@/ui/BookCard';
import usePagination from '@/hooks/usePagination';
import Pagination from '@/components/Pagination';
import Button from '@/components/Button';
import LoadingComponent from '@/components/Loader';
import Modal from '@/components/Modal';
import BookForm from '@/ui/BookForm';
import getBooksFromLocalStorage from '@/utils/getBookFromLocalStorage';
import { Book } from '@/types/Book';

const fetcher = (url: string) => axios.get(url).then(res => res.data);

const BookList = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const apiUrl = `${process.env.NEXT_PUBLIC_API}/books`;
  const { data: apiData, error, isLoading } = useSWR(apiUrl, fetcher);
  const booksPerPage: number = 5;

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [localBooks, setLocalBooks] = useState<Book[]>([]);

  useEffect(() => {
    const localStorageBooks = getBooksFromLocalStorage();
    setLocalBooks(localStorageBooks);
  }, [getBooksFromLocalStorage]);


  if (error) return <div>Error loading books</div>;

  const mergedData = apiData ? [...apiData, ...localBooks] : localBooks;
  const { currentPage, totalPages, currentItems, handleClick } = usePagination(mergedData, booksPerPage);

  return (
    <>
      <div className={styles.bookListContainer}>
        <div className={styles.heading}>
          <h1>Popular Books</h1>
          <Button text="Add Book" onClick={openModal} />
        </div>
        {
          isLoading ? (
            <LoadingComponent />
          ) : (
            <div>
              <div className={styles.bookList}>
                {currentItems.map(book => (
                  <BookCard key={book.id} book={book} />
                ))}
              </div>
              {mergedData.length > booksPerPage && (
                <Pagination currentPage={currentPage} totalPages={totalPages} handleClick={handleClick} />
              )}
            </div>
          )
        }
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <BookForm closeTheForm={closeModal} />
      </Modal>
    </>
  );
};

export default BookList;
