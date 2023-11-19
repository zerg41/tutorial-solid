import type { Component } from 'solid-js';
import { createSignal } from 'solid-js';

import BookList from './book-list';
import AddBook from './add-book';

import type { IBook } from './types';

import styles from './style.module.css';

const initialBooks: IBook[] = [
  { title: 'Code Complete', author: 'Steve McConnell' },
  { title: 'The Hobbit', author: 'J.R.R. Tolkien' },
  { title: 'Living a Feminist Life', author: 'Sarah Ahmed' },
];

type BookshelfProps = {
  name: string;
};

const Bookshelf: Component<BookshelfProps> = (props) => {
  const [books, setBooks] = createSignal(initialBooks);

  function addBook(book: IBook): void {
    setBooks((prev) => [...prev, book]);
  }

  return (
    <>
      <h2>{props.name}'s Bookshelf</h2>
      <div class={styles.bookshelf}>
        <BookList books={books()} />
        <div class={styles.divider} />
        <AddBook onAdd={addBook} />
      </div>
    </>
  );
};

export default Bookshelf;
