"use client"
import Image from 'next/image';
import axios from 'axios';
import useSWR from 'swr';
import styles from './bookDetails.module.scss';
import { Book } from '@/types/Book';

const BookDetails = ({ params }: { params: { book_id: string } }) => {
  const fetcher = (url: string) => axios.get(url).then(res => res.data);
  const apiUrl = `${process.env.NEXT_PUBLIC_API}/books/`;

  const { data, error } = useSWR<Book>(apiUrl + params.book_id, fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  const publicationDate = new Date(data.publicationDate).toLocaleDateString();

  return (
    <div className={styles.bookDetailsContainer}>
      <div className={styles.bookDetails}>
        <Image
          src={data.cover}
          alt={`${data.title} cover`}
          className={styles.bookCover}
          width={320}
          height={320}
        />
        <div className={styles.bookInfo}>
          <h2 className={styles.bookTitle}>{data.title}</h2>
          <h3 className={styles.bookAuthor}>{data.author}</h3>
          <p className={styles.bookDescription}>{data.description}</p>
          <p className={styles.bookPublicationDate}>Published on: {publicationDate}</p>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
