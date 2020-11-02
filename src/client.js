import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './store/configureStore';

const store = configureStore(window.PRELOADED_STATE);

import App from './App';

const app = (
  <App
    Router={BrowserRouter}
    store={store}
  />
);

hydrate(app, document.getElementById('root'));