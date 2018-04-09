import { Redirect } from 'react-router-dom';
import React, { Component } from 'react';
import { connect } from 'react-redux';


import { authLogin } from '../redux/modules/auth';
import { fetchUser } from '../redux/modules/user';
import Input from './components/Input';

class Login extends Component {
    constructor(props = {}) {
        super(props);

        this.state = {
            email: '',
            password: '',
            redirect: false
        }

        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        const { loginUser, fetchUser } = this.props;
        const { email, password } = this.state;
        const payload = {
            email,
            password
        };

        this.props.loginUser(payload).then(() => {
            fetchUser().then(() => this.setState({ redirect: true }));
        });
    }

    onChange(name, value) {
        this.setState({ [name]: value });
    }

    render() {
        if(this.state.redirect) {
            return ( <Redirect to='/dashboard' />);
        }

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
    loginUser: (payload) => dispatch(authLogin(payload)),
    fetchUser: () => dispatch(fetchUser())
});

export default connect(
  null,
  mapDispatchToProps
)(Login);

export { Login };
