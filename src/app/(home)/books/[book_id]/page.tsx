import Image from 'next/image';
import styles from './bookDetails.module.scss';
import { Book } from '@/types/Book';
import { books } from '@/data/books';

const BookDetails = ({ params }: { params: { book_id: string } }) => {
  const bookId = parseInt(params.book_id)
  const bookData: Book = books[0]

  const book = books.find(book => book.id === bookId)

  const publicationDate = book && new Date(book.publicationDate).toLocaleDateString();
  console.log('TEST', book, bookId)

  if (!book) {
    return <div className={styles.bookDetailsContainer}>Book not found.</div>;
  }

  return (
    <div className={styles.bookDetailsContainer}>
      <div className={styles.bookDetails}>
        <Image
          src={book.cover}
          alt={`${book.title} cover`}
          className={styles.bookCover}
          width={320}
          height={320}
        />
        <div className={styles.bookInfo}>
          <h2 className={styles.bookTitle}>{book.title}</h2>
          <h3 className={styles.bookAuthor}>{book.author}</h3>
          <p className={styles.bookDescription}>{book.description}</p>
          <p className={styles.bookPublicationDate}>Published on: {publicationDate}</p>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
