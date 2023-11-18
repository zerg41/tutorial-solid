import type { Component } from 'solid-js';

import BookList from './book-list';
import AddBook from './add-book';

type BookshelfProps = {
  name: string;
};

const Bookshelf: Component<BookshelfProps> = (props) => {
  return (
    <div>
      <h2>{props.name}'s Bookshelf</h2>
      <BookList />
      <AddBook />
    </div>
  );
};

export default Bookshelf;
