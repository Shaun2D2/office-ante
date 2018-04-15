import React, { Component } from 'react';

import TextArea from '../../components/TextArea';
import Input from '../../components/Input';
import Card from '../../components/Card';

class Wager extends Component {
    constructor(props = {}) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.moveForward();
    }

    render() {
        const { handleChange } = this.props;
        return (
          <Card>
              <h1 className="is-size-4">Whats the Wager?</h1>
              <p>So what is the bet?</p>
              <form onSubmit={this.handleSubmit} style={{ marginTop: 25 }}>
                  <Input
                    label="Bet Title"
                    name="title"
                    onChange={handleChange}
                    placeholder="The great ping pong challenge"
                  />
                  <TextArea
                    label="Bet"
                    name="body"
                    onChange={handleChange}
                    placeholder="Rick will win the next 5 ping pong games"
                    cssStyle={{ height: 150 }}
                  />
                <button className="button is-primary">Next</button>
              </form>
          </Card>
        )
    }
}

export default Wager;
