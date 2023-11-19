import type { Component } from 'solid-js';
import { Show, createSignal } from 'solid-js';

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
  const [showForm, setShowForm] = createSignal(false);

  function toggleForm(): void {
    setShowForm((prev) => !prev);
  }

  function addBook(book: IBook): void {
    setBooks((prev) => [...prev, book]);
  }

  return (
    <section class={styles.bookshelf}>
      <h2>{props.name}'s Bookshelf</h2>
      <div class={styles.content}>
        <div class={styles.control}>
          <Show when={showForm()} fallback={<button onClick={toggleForm}>Add a book</button>}>
            <button onClick={toggleForm}>Finished adding books</button>
            <AddBook onAdd={addBook} />
          </Show>
        </div>
        <div class={styles.divider} />
        <BookList books={books()} />
      </div>
    </section>
  );
};

export default Bookshelf;
