import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Book } from '@/types/Book';
import Input from '@/components/Input';
import Button from '@/components/Button';
import saveBooksToLocalStorage from '@/utils/saveBookToLocalStoraget';

function generateRandomNumber(): string {
  return Math.floor(Math.random() * 100).toString().padStart(2, '0');
}

type BookFormProps = {
  closeTheForm: () => void;
};

const BookForm: React.FC<BookFormProps> = ({ closeTheForm }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<Book>();

  const onSubmit: SubmitHandler<Book> = (data) => {
    const bookId = generateRandomNumber();
    const newBook: Book = { ...data, id: bookId };
    try {
      saveBooksToLocalStorage(newBook);
      closeTheForm();
    } catch (error) {
      console.error('Error saving data to local storage:', error);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Title"
          defaultValue=""
          {...register('title', { required: true })}
          error={errors.title ? 'This field is required' : ''}
        />
        <Input
          label="Author"
          defaultValue=""
          {...register('author', { required: true })}
          error={errors.author ? 'This field is required' : ''}
        />
        <Input
          label="Description"
          defaultValue=""
          {...register('description', { required: true })}
          error={errors.description ? 'This field is required' : ''}
        />
        <Input
          label="Publication Date"
          type="date"
          defaultValue=""
          {...register('publicationDate', { required: true })}
          error={errors.publicationDate ? 'This field is required' : ''}
        />
        <Input
          label="Cover Image URL"
          type="url"
          defaultValue=""
          {...register('cover', { required: true })}
          error={errors.cover ? 'This field is required' : ''}
        />
        <Button text='Submit' type="submit" />
      </form>
    </div>
  );
};

export default BookForm;
