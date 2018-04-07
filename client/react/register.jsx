import React, { Component } from 'react';
import axios from 'axios';

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

    onChange(e) {
        const name = e.target.name;
        const value = e.target.value;

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
                    <div className="field">
                      <label>Email</label>
                      <div className="control">
                        <input
                          className="input"
                          name="email"
                          type="text"
                          placeholder="john@example.com"
                          value={email}
                          onChange={this.onChange}
                        />
                      { Object.keys(errors).find(error => error === 'email') && <p>Invalid Email address!</p> }
                      </div>
                    </div>
                    <div className="field">
                      <label>Password</label>
                      <div className="control">
                        <input
                          className="input"
                          name="password"
                          type="password"
                          placeholder=""
                          value={password}
                          onChange={this.onChange}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <label>Confirm Password</label>
                      <div className="control">
                        <input
                          className="input"
                          name="confirmPassword"
                          type="password"
                          placeholder=""
                          value={confirmPassword}
                          onChange={this.onChange}
                        />
                      </div>
                    </div>
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
