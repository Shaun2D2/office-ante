import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authLogin } from '../redux/modules/auth';
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
        const { email, password } = this.state;
        const payload = {
            email,
            password
        };

        this.props.login(payload);
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
                    <button
                      className="button is-primary"
                      onClick={this.handleSubmit}
                    >
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    login: (payload) => dispatch(authLogin(payload))
});

export default connect(
  null,
  mapDispatchToProps
)(Login);

export { Login };
