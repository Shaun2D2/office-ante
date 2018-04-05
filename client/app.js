import React from 'react';
import ReactDOM from 'react-dom';

import 'bulma/bulma.sass';

const Hello = () => (
    <div>
        Hello World, react is here!
    </div>
);

ReactDOM.render(<Hello />, document.getElementById('app'));
