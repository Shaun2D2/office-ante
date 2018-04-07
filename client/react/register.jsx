import React, { Component } from 'react';
import axios from 'axios';

import Input from './components/Input';

class Register extends Component {
    constructor(props = {}) {
        super(props)

        this.state = {
            email: '',
            password: '',
            confirmPassword: '',
            errors: []
        }

        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onChange(name, value) {
        console.log([name, value]);
        this.setState({ [name]:value });
    }

    handleSubmit() {
        const payload = {
            email: this.state.email,
            password: this.state.password
        }

        axios.post('/api/register', payload).then((res) => {
            console.log(res);
        })
        .catch((err) => this.setState({ errors: err }));
    }

    render() {
        const {
          email,
          password,
          confirmPassword,
          errors
        } = this.state;

        return (
          <section className="section">
            <div className="container">
              <div className="columns">
                <div className="column is-half is-offset-one-quarter">
                  <div className="box">
                    <Input
                      label="Email"
                      name="email"
                      type="text"
                      placeholder="john@example.com"
                      value={email}
                      onChange={this.onChange}
                      error={null}
                    />
                    <Input
                      label="Password"
                      type="password"
                      name="password"
                      type="password"
                      placeholder=""
                      value={password}
                      onChange={this.onChange}
                    />
                    <Input
                      label="Confirm Password"
                      type="password"
                      name="confirmPassword"
                      type="password"
                      placeholder=""
                      value={confirmPassword}
                      onChange={this.onChange}
                    />
                    <button
                      className="button is-primary"
                      onClick={this.handleSubmit}
                    >
                      Register
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
    }
}

export default Register;
