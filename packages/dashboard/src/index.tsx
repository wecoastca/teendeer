import React from 'react';
import ReactDOM from 'react-dom';

import { store } from './tools/store';
import App from './components/App/App';
import { bootstrap } from './vendors';

import './index.less';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

bootstrap();
