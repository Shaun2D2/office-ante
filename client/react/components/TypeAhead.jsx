import React, { Component } from 'react';

import Input from './Input';

class TypeAhead extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [
                'james',
                'jacob',
                'billy'
            ]
        }
    }

    render() {
        return (
          <div className="type-ahead">
            <Input />
            {
              this.state.data.map((item, index) => (
                  <div key={index} className="type-ahead__item"> {item} </div>
              ))
            }
          </div>
        )
    }
}

export default TypeAhead;
