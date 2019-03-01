import React from 'react';
import { render } from 'react-dom';

import Dispatch from './components/Dispatch';
import * as ServiceWorker from './serviceWorker';

render(
  <Dispatch />,
  document.getElementById('root'),
);
ServiceWorker.unregister();
