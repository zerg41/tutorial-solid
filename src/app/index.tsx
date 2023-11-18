import type { Component } from 'solid-js';

import logo from '../assets/logo.svg';

import styles from './style.module.css';
import { Bookshelf, HelloWorld } from '../components';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header>
        <img src={logo} class={styles.logo} alt='logo' />
      </header>
      <main>
        <h1>Welcome!</h1>
        <HelloWorld />
        <Bookshelf name='zerg41' />
      </main>
    </div>
  );
};

export default App;
