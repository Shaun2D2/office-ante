import React, { Component } from 'react';
import { debounce } from 'lodash';
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
        this.sendValue = this.sendValue.bind(this);
        this.setValue = this.setValue.bind(this);
        this.getUsers = debounce(this.getUsers.bind(this), 300);
    }

    getUsers(value) {
        axios.get(`/api/users?filter=${value}&limit=4`)
             .then((result) => this.setState({ data: result.data }));
    }

    handleChange(name, value) {
        this.setState({ value }, () => {
          if(value.length > 0) {
            this.getUsers(value);
          } else {
            this.setState({ data: [] });
          }

          this.sendValue();
        });
    }

    setValue(value) {
        this.setState({ value, data: [] }, () => this.sendValue());
    }

    sendValue() {
        this.props.onChange(this.state.value);
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
