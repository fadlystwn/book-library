import { Book } from '@/types/Book';
import LocalStorage from './localStorage';

const getBooksFromLocalStorage = (): Book[] => {
  const books = LocalStorage.getItem<Book[]>('books');
  return books ? books : [];
};

export default getBooksFromLocalStorage;
