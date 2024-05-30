"use client"
import axios from 'axios';
import useSWR from 'swr';
import styles from './booklist.module.scss';
import BookCard from '@/ui/BookCard';
import usePagination from '@/hooks/usePagination';
import Pagination from '@/components/Pagination';
import Button from '@/components/Button';
import LoadingComponent from '@/components/Loader';

const fetcher = (url: string) => axios.get(url).then(res => res.data)

const BookList = () => {
  const apiUrl = `${process.env.NEXT_PUBLIC_API}/books`;

  const { data, error, isLoading } = useSWR(apiUrl, fetcher);
  const booksPerPage: number = 5;
  const { currentPage, totalPages, currentItems, handleClick } = usePagination(data, booksPerPage);

  if (error) return <div>Error loading books</div>;

  return (
    <div className={styles.bookListContainer}>
      <div className={styles.heading}>
        <h1>Popular Books</h1>
        <Button text="Add Book" onClick={() => { }} />
      </div>
      {
        isLoading ? (<LoadingComponent />)
          : (
            <div>
              <div className={styles.bookList}>
                {data && currentItems.map(book => (
                  <BookCard key={book.id} book={book} />
                ))}
              </div>
              {data && (<Pagination currentPage={currentPage} totalPages={totalPages} handleClick={handleClick} />)}
            </div>
          )
      }
    </div>
  );
};

export default BookList;
