import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createBrowserHistory from 'history/createBrowserHistory'

import configureStore from './redux/configureStore';
import { Router, Route } from 'react-router';

import Navbar from './react/components/navbar';
import Home from './react/home';

import 'bulma/bulma.sass';

const store = configureStore();
const history = createBrowserHistory()


const App = () => (
      <Router history={history}>
        <div>
          <Navbar />
          <Route component={Home} default />
        </div>
      </Router>
);

ReactDOM.render(
    <Provider store={store}>  
      <App />
    </Provider>
    , document.getElementById('app')
);
