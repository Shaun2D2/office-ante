import React from 'react';

const Login = () => (
  <section className="section">
    <div className="container">
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
          <div className="box">
            <div className="field">
              <label>Email</label>
              <div className="control">
                <input className="input" type="text" placeholder="john@example.com" />
              </div>
            </div>
            <div className="field">
              <label>Password</label>
              <div className="control">
                <input className="input" type="text" placeholder="" />
              </div>
            </div>
            <button className="button is-primary"> Login </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Login;
