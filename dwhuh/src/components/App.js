import React, { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { RouteContainer } from '../containers';
import './App.css';

const App = () => (
  <BrowserRouter>
    <Fragment>
      <RouteContainer />
    </Fragment>
  </BrowserRouter>
);

export default App;
