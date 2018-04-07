import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createBrowserHistory from 'history/createBrowserHistory'

import configureStore from './redux/configureStore';
import { Router, Route, IndexRoute } from 'react-router';

import Navbar from './react/components/Navbar';
import Home from './react/Home';
import Login from './react/Login';
import About from './react/About';
import Register from './react/Register';

import 'bulma/bulma.sass';
import './sass/main.scss';

const store = configureStore();
const history = createBrowserHistory()


const App = () => (
      <Router history={history}>
        <div>
          <Navbar />
          <Route component={Home} path='/' exact />
          <Route component={Login} path='/login' />
          <Route component={About} path='/about' />
          <Route component={Register} path='/sign-up' />
        </div>
      </Router>
);

ReactDOM.render(
    <Provider store={store}>  
      <App />
    </Provider>
    , document.getElementById('app')
);
