/* @refresh reload */
import { render } from 'solid-js/web';

import App from './app';

import './index.css';

const root = document.getElementById('root') as HTMLElement;

render(() => <App />, root);
