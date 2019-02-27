import React, { Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { RouteContainer } from '../containers';
import {
  HomePage,
  ReactPage,
  CodeTestPage,
  DesignPage,
  CompetitionPage,
} from './pages';

import './App.css';
import {
  HOME,
  REACT,
  CODE_TEST,
  DESIGNS,
  COMPETITION,
} from '../static/CONSTANTS/routes';

const App = () => (
  <BrowserRouter>
    <Fragment>
      <RouteContainer />

      <Route exact path={HOME.LINK} component={HomePage} />
      <Route path={REACT.LINK} component={ReactPage} />
      <Route path={CODE_TEST.LINK} component={CodeTestPage} />
      <Route path={DESIGNS.LINK} component={DesignPage} />
      <Route path={COMPETITION.LINK} component={CompetitionPage} />
    </Fragment>
  </BrowserRouter>
);

export default App;
