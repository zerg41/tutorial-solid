import type { Component } from 'solid-js';

import { Bookshelf, Counter, HelloWorld } from '../components';
import logo from '../assets/logo.svg';

import styles from './style.module.css';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header>
        <img src={logo} class={styles.logo} alt='logo' />
      </header>
      <main>
        <h1>Welcome!</h1>
        {/* <HelloWorld /> */}
        <Bookshelf name='zerg41' />
        {/* <Counter /> */}
      </main>
    </div>
  );
};

export default App;
