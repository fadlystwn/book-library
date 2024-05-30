import { Book } from '@/types/Book';
import LocalStorage from './localStorage';

const getBooksFromLikedKeys = (likedKeys: string[]) => {
    const favoriteBooksArray: Book[] = [];
    likedKeys.forEach((key) => {
        const bookKey = key.replace('liked_', 'book_');
        const book = LocalStorage.getItem<Book>(bookKey);
        if (book) {
            favoriteBooksArray.push(book);
        }
    });
    return favoriteBooksArray;
};

export default getBooksFromLikedKeys;
