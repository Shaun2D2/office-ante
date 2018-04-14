import React, { Component } from 'react';
import axios from 'axios';

import Input from './Input';

class TypeAhead extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.setValue = this.setValue.bind(this);
    }

    handleChange(name, value) {
        this.setState({ value });

        axios.get(`/api/users?filter=${value}`).then((result) => this.setState({ data: result.data }));
    }

    setValue(value) {
        this.setState({ value, data: [] });
    }

    render() {
        return (
          <div className="type-ahead">
            <Input
              onChange={this.handleChange}
              value={this.state.value}
            />
            {
              this.state.data.map((item, index) => (
                  <div
                    key={index}
                    className="type-ahead__item"
                    onClick={() => {this.setValue(item.email)}}
                  >
                    {item.email}
                  </div>
              ))
            }
          </div>
        )
    }
}

export default TypeAhead;
