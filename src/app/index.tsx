import type { Component } from 'solid-js';

import { Bookshelf, Counter, HelloWorld } from '../components';
import logo from '../assets/logo.svg';

import styles from './style.module.css';

const App: Component = () => {
  return (
    <div class={styles.app}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt='logo' />
      </header>
      <main class={styles.main}>
        <h1>Welcome!</h1>
        {/* <HelloWorld /> */}
        <Bookshelf name='zerg41' />
        {/* <Counter /> */}
      </main>
    </div>
  );
};

export default App;
