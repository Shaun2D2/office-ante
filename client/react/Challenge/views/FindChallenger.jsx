import React, { Component } from 'react';

import TypeAhead from '../../components/TypeAhead';
import Card from '../../components/Card';

class FindChallenger extends Component {
    constructor(props = {}) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.moveForward();
    }

    render() {
      return (
        <Card>
          <h1 className="is-size-4">Find a Challenger</h1>
          <p>In order to start a challenge, let's find someone to challenge!</p>
          <p>Dont worry if they are not signed up for Office Ante, we'll send them an invite for you!</p>
          <form onSubmit={this.handleSubmit} style={{ marginTop: 25 }}>
            <div className="field">
              <TypeAhead
                name="challenger"
                onChange={this.props.handleChange} />
            </div>
            <button className="button is-primary">Onward!</button>
          </form>
        </Card>
      )
    }
}

export default FindChallenger;
