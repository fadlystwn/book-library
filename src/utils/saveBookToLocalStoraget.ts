import { Book } from '@/types/Book';
import LocalStorage from './localStorage';
const saveBooksToLocalStorage = (book: Book) => {
  try {
    const existingBooks = LocalStorage.getItem<Book[]>('books');
    const books = existingBooks ? existingBooks : [];
    books.push(book);
    LocalStorage.setItem('books', books);
  } catch (error) {
    console.error('Error saving data to local storage:', error);
    throw new Error('Could not save the book');
  }
};

export default saveBooksToLocalStorage;
