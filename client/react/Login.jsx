import React, { Component } from 'react';
import { userLogin } from '../redux/modules/user';
import Input from './components/Input';

class Login extends Component {
    constructor(props = {}) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }

        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        // do a thing...
    }

    onChange(name, value) {
        this.setState({ [name]: value });
    }

    render() {
        return (
          <section className="section">
            <div className="container">
              <div className="columns">
                <div className="column is-half is-offset-one-quarter">
                  <div className="box">
                    <Input
                        label="Email"
                        name="email"
                        placeholder="john@example.com"
                        onChange={this.onChange}
                    />
                    <Input
                      label="Password"
                      name="password"
                      type="password"
                      onChange={this.onChange}
                    />
                    <button className="button is-primary"> Login </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
    }
}

export default Login;
