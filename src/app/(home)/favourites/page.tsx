"use client"
import { FC, useEffect, useState } from 'react';
import { Book } from '@/types/Book';
import BookCard from '@/ui/BookCard';
import styles from './favourites.module.scss';
import getBooksFromLikedKeys from '@/utils/getBooksFromLike';
import getLikesFromLocalStorage from '@/utils/getLikesFromLocalStorage';

const FavoritesPage: FC = () => {
  const [favoriteBooks, setFavoriteBooks] = useState<Book[]>([]);

  useEffect(() => {
    const likedKeys = getLikesFromLocalStorage();
    const favoriteBooksArray = getBooksFromLikedKeys(likedKeys);

    setFavoriteBooks(favoriteBooksArray);
  }, []);

  return (
    <div className={styles.favoritesPage}>
      <h1>Your Favorite Books</h1>
      <div className={styles.bookList}>
        {favoriteBooks.length > 0 ? (
          favoriteBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))
        ) : (
          <p>No favorite books yet.</p>
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;
