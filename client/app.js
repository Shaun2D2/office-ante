import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createBrowserHistory from 'history/createBrowserHistory'

import configureStore from './redux/configureStore';
import { Router, Route, IndexRoute } from 'react-router';

import Modal from './react/components/modal/rootModal';
import Challenge from './react/CreateChallenge';
import Navbar from './react/components/Navbar';
import Dashboard from './react/Dashboard';
import Register from './react/Register';
import Login from './react/Login';
import About from './react/About';
import Home from './react/Home';

import 'bulma/bulma.sass';
import './sass/main.scss';

const store = configureStore();

/**
 * configure axios if a token is present
 * 
 */
if(store.getState().hasIn(['auth', 'token'])) {
    axios.defaults.headers.common['Authorization'] = `bearer ${store.getState().getIn(['auth', 'token'])}`;
}


const history = createBrowserHistory()


const App = () => (
      <div>
      <Router history={history}>
        <div>
          <Navbar />
          <Route component={Home} path='/' exact />
          <Route component={Login} path='/login' />
          <Route component={About} path='/about' />
          <Route component={Register} path='/sign-up' />
          <Route component={Dashboard} path='/challenges' />
          <Route component={Challenge} path='/create-challenge' />
        </div>
      </Router>
      <Modal />
      </div>
);

ReactDOM.render(
    <Provider store={store}>  
      <App />
    </Provider>
    , document.getElementById('app')
);
