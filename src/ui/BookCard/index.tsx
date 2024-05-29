import { FC } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { Book } from '@/types/Book'
import styles from './bookCard.module.scss';

type BookCardProps = {
  book: Book;
}

const BookCard: FC<BookCardProps> = ({ book }) => {
  const publicationDate = new Date(book.publicationDate).toLocaleDateString();

  return (
    <div className={styles.bookCard}>
      <Link href={`books/${book.id}`}>
        <Image src={book.cover} alt={`${book.title} cover`} className={styles.bookCover} width={150} height={150} />
        <div className={styles.bookDetails}>
          <h2 className={styles.bookTitle}>{book.title}</h2>
          <h3 className={styles.bookAuthor}>{book.author}</h3>
          <p className={styles.bookDescription}>{book.description}</p>
          <p className={styles.bookPublicationDate}>Published on: {publicationDate}</p>
        </div>
      </Link>
    </div>
  );
};

export default BookCard