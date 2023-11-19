import type { Component } from 'solid-js';
import { For, Show, createResource, createSignal } from 'solid-js';

import { searchBooks } from '../searchBooks';

import type { IBook } from '../types';

import styles from './style.module.css';

type AddBookProps = {
  onAdd: (book: IBook) => void;
};

const AddBook: Component<AddBookProps> = (props) => {
  const [input, setInput] = createSignal('');
  const [query, setQuery] = createSignal('');
  const [data] = createResource(query, searchBooks);

  const isButtonDisabled = () => !input();

  function handleSearchButtonClick(event: MouseEvent): void {
    event.preventDefault();

    setQuery(input());
  }

  return (
    <>
      <form class={styles.form}>
        <div class={styles.field}>
          <label for='title'>Search books:</label>
          <input
            id='title'
            class={styles.input}
            value={input()}
            onInput={(e) => {
              setInput(e.currentTarget.value);
            }}
          />
        </div>
        <button
          type='submit'
          classList={{ [styles.button]: true, [styles.disabled]: isButtonDisabled() }}
          disabled={isButtonDisabled()}
          onClick={handleSearchButtonClick}
        >
          Search
        </button>
      </form>
      <Show when={!data.loading} fallback={<>Searching...</>}>
        <ul class={styles.list}>
          <For each={data()}>
            {(book) => (
              <li>
                <button
                  aria-label={`Add ${book.title} by ${book.author} to the bookshelf`}
                  onClick={(event) => {
                    event.preventDefault();

                    props.onAdd(book);
                  }}
                >
                  Add
                </button>{' '}
                {book.title} by {book.author}
              </li>
            )}
          </For>
        </ul>
      </Show>
    </>
  );
};

export default AddBook;
