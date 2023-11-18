import { Component } from 'solid-js';

const BookList: Component = () => {
  return (
    <ul>
      <li>
        Code Complete <span style={{ 'font-style': 'italic' }}>(Steve McConnell)</span>
      </li>
      <li>
        The Hobbit <span style={{ 'font-style': 'italic' }}>(J.R.R. Tolkien)</span>
      </li>
    </ul>
  );
};

export default BookList;
