import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import { App } from './templates/App';
import { Abc } from './templates/Abc';
import { Menu } from './templates/Menu';
import { Page404 } from './templates/Page404';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Menu />
    <Switch>
      <Route path="/abc/:slug/:id" component={Abc} />
      <Route path="/abc/:slug" component={Abc} />
      <Route path="/abc" component={Abc} />
      <Route path="/" component={App} exact />
      <Route path="*" component={Page404} />
    </Switch>
  </BrowserRouter>,
);
