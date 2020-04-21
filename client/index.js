/**
 * Entry point
 */

import '../node_modules/nprogress/nprogress.css';
import './style.css';

import { h, render } from 'preact';

import App from './containers/App';

render(<App />, document.body);
