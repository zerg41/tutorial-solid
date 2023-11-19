import type { Component } from 'solid-js';
import { createSignal } from 'solid-js';

import type { IBook } from '../types';

import styles from './style.module.css';

const emptyBook: IBook = { title: '', author: '' };

type AddBookProps = {
  onAdd: (book: IBook) => void;
};

const AddBook: Component<AddBookProps> = (props) => {
  const [newBook, setNewBook] = createSignal(emptyBook);

  function handleClick(event: MouseEvent): void {
    event.preventDefault();

    props.onAdd(newBook());
    setNewBook(emptyBook);
  }

  return (
    <form class={styles.form}>
      <div class={styles.input}>
        <label for='title'>Book name</label>
        <input
          id='title'
          value={newBook().title}
          onInput={(event) => {
            setNewBook(({ author }) => ({ author, title: event.currentTarget.value }));
          }}
        />
      </div>
      <div class={styles.input}>
        <label for='author'>Author</label>
        <input
          id='author'
          value={newBook().author}
          onInput={(event) => {
            setNewBook(({ title }) => ({ title, author: event.currentTarget.value }));
          }}
        />
      </div>
      <button type='submit' class={styles.button} onClick={handleClick}>
        Add book
      </button>
    </form>
  );
};

export default AddBook;
