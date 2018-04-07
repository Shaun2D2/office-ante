import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createBrowserHistory from 'history/createBrowserHistory'

import configureStore from './redux/configureStore';
import { Router, Route, IndexRoute } from 'react-router';

import Navbar from './react/components/navbar';
import Home from './react/home';
import Login from './react/login';
import About from './react/about';

import 'bulma/bulma.sass';

const store = configureStore();
const history = createBrowserHistory()


const App = () => (
      <Router history={history}>
        <div>
          <Navbar />
          <Route component={Home} path='/' exact />
          <Route component={Login} path='/login' />
          <Route component={About} path='/about' />
        </div>
      </Router>
);

ReactDOM.render(
    <Provider store={store}>  
      <App />
    </Provider>
    , document.getElementById('app')
);
