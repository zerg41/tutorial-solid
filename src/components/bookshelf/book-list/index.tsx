import type { Component } from 'solid-js';
import { For } from 'solid-js';

import type { IBook } from '../types';

import styles from './style.module.css';

type BookListProps = {
  books: IBook[];
};

const BookList: Component<BookListProps> = (props) => {
  const totalBooks = () => props.books.length;

  return (
    <div>
      <h2 class={styles.total}>My books ({totalBooks()}):</h2>
      <ul class={styles.list}>
        <For each={props.books}>
          {({ title, author }) => (
            <li>
              {title} <span class={styles.author}>({author})</span>
            </li>
          )}
        </For>
      </ul>
    </div>
  );
};

export default BookList;
