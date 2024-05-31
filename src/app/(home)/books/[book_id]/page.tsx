"use client";
import axios from 'axios';
import useSWR from 'swr';
import styles from './bookDetails.module.scss';
import { Book } from '@/types/Book';
import { useEffect, useState } from 'react';
import getBooksFromLocalStorage from '@/utils/getBookFromLocalStorage';
import ImageFallback from '@/components/ImageFallback';

const BookDetails = ({ params }: { params: { book_id: string } }) => {
  const fetcher = (url: string) => axios.get(url).then(res => res.data);
  const apiUrl = `${process.env.NEXT_PUBLIC_API}/books/`;
  const [localData, setLocalData] = useState<Book | null>(null);
  const { data, error } = useSWR<Book>(apiUrl + params.book_id, fetcher);

  useEffect(() => {
    if (error) {
      const localBooks = getBooksFromLocalStorage();
      if (localBooks.length > 0) {
        setLocalData(localBooks.find(book => book.id === params.book_id) || null);
      }
    }
  }, [error, params.book_id]);

  const publicationDate = data?.publicationDate || localData?.publicationDate;
  const formattedPublicationDate = publicationDate ? new Date(publicationDate).toLocaleDateString() : 'Date not available';

  const hasData = error ? localData : data;

  return (
    <div className={styles.bookDetailsContainer}>
      <div className={styles.bookDetails}>
        <ImageFallback
          src={hasData?.cover || ''}
          alt={`${hasData?.title || 'Book'} cover`}
          className={styles.bookCover}
          width={320}
          height={320}
        />
        <div className={styles.bookInfo}>
          <h2 className={styles.bookTitle}>{hasData?.title || 'Title not available'}</h2>
          <h3 className={styles.bookAuthor}>{hasData?.author || 'Author not available'}</h3>
          <p className={styles.bookDescription}>{hasData?.description || 'Description not available'}</p>
          <p className={styles.bookPublicationDate}>Published on: {formattedPublicationDate}</p>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
