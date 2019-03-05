import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './App';
import Reducers from '../store/modules';
import ServiceLoader from '../services';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(Reducers, devTools);
const services = new ServiceLoader(store);

services.loadServiceModules();

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
