import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './redux/configureStore';

import 'bulma/bulma.sass';

const store = configureStore();

const App = () => (
      <div>
          Hello redux and react world!
      </div>
);

ReactDOM.render(
    <Provider store={store}>  
      <App />
    </Provider>
    , document.getElementById('app')
);
