import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './App';
import Reducers from '../store/modules';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(Reducers, devTools);

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
