import { FC, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Book } from '@/types/Book';
import styles from './bookCard.module.scss';
import { Icon } from '@iconify/react';

type BookCardProps = {
  book: Book;
};

const BookCard: FC<BookCardProps> = ({ book }) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const publicationDate = new Date(book.publicationDate).toLocaleDateString();

  const handleLikeClick = () => {
    const newLikedState = !isLiked;
    setIsLiked(newLikedState);
    localStorage.setItem(`liked_${book.id}`, JSON.stringify(newLikedState));
  };

  useEffect(() => {
    const storedLiked = localStorage.getItem(`liked_${book.id}`);
    if (storedLiked) {
      setIsLiked(JSON.parse(storedLiked));
    }
  }, [book.id]);

  return (
    <div className={styles.bookCard}>
      <div className={styles.bookLoveIcon}>
        <button className={`${styles.bookLoveButton} ${isLiked ? styles.liked : ''}`} onClick={handleLikeClick}>
          <Icon icon="iconamoon:heart-duotone" fontSize={24} />
        </button>
      </div>
      <Link href={`books/${book.id}`}>
        <div className={styles.bookCoverContainer}>
          <Image src={book.cover} alt={`${book.title} cover`} className={styles.bookCover} width={150} height={150} />
          <div className={styles.bookDetails}>
            <h2 className={styles.bookTitle}>{book.title}</h2>
            <h3 className={styles.bookAuthor}>{book.author}</h3>
            <p className={styles.bookPublicationDate}>Published on: {publicationDate}</p>
          </div>
        </div>
      </Link>

    </div>
  );
};

export default BookCard;
