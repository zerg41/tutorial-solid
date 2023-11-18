import { Component } from 'solid-js';

const AddBook: Component = () => {
  return (
    <form>
      <div>
        <label for='title'>Book name</label>
        <input id='title' />
      </div>
      <div>
        <label for='author'>Author</label>
        <input id='author' />
      </div>
      <button type='submit'>Add book</button>
    </form>
  );
};

export default AddBook;
