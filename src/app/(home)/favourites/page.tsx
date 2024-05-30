"use client"
import { FC, useEffect, useState } from 'react';
import { Book } from '@/types/Book';
import BookCard from '@/ui/BookCard';
import styles from './favourites.module.scss';

const FavoritesPage: FC = () => {
  const [favoriteBooks, setFavoriteBooks] = useState<Book[]>([]);

  useEffect(() => {
    const favoriteBooksArray: Book[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith('liked_') && JSON.parse(localStorage.getItem(key)!)) {
        const book = JSON.parse(localStorage.getItem(key.replace('liked_', 'book_'))!);
        if (book) {
          favoriteBooksArray.push(book);
        }
      }
    }
    console.log(favoriteBooks)
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
