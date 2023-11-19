import type { Component } from 'solid-js';
import { createSignal } from 'solid-js';

import styles from './style.module.css';

const Counter: Component = () => {
  const [count, setCount] = createSignal(0);

  function handleClick(): void {
    setCount((prev) => prev + 1);
  }

  return (
    <div class={styles.counter}>
      Current count: {count()}
      <button class={styles.button} onClick={handleClick}>
        Increment
      </button>
    </div>
  );
};

export default Counter;
