import React from 'react';
import ReactDOM from 'react-dom';
import App from '@/layout/App';
import DetailApp from '@/layout/DetailApp';
import store from '@/store';
import { Provider } from 'react-redux';
import { HashRouter, Switch, Route } from 'react-router-dom';
import '@/main.scss';

ReactDOM.render(
  <Provider store = { store }>
    <HashRouter>
      <Switch>
        <Route path = '/detail' component = { DetailApp } />
        <Route path = '/' component = { App }/>
      </Switch>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);

