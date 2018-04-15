import React, { Component } from 'react';

import TypeAhead from '../../components/TypeAhead';
import Card from '../../components/Card';

class FindChallenger extends Component {
    constructor(props = {}) {
        super(props);

        this.state = {
            email: null
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(val) {
        this.setState({ email: val });
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log('test');
    }

    render() {
      return (
        <Card>
          <h1 className="is-size-4">Find a Challenger</h1>
          <p>In order to start a challenge, let's find someone to challenge!</p>
          <p>Dont worry if they are not signed up for Office Ante, we'll send them an invite for you!</p>
          <form onSubmit={this.handleSubmit}>
            <div className="field" style={{ marginTop: 25 }}>
              <TypeAhead onChange={this.handleChange} />
            </div>
            <button className="button is-primary" onClick={this.props.moveForward}>Onward!</button>
          </form>
        </Card>
      )
    }
}

export default FindChallenger;
