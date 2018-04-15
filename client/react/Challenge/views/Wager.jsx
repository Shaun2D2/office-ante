import React, { Component } from 'react';

import Card from '../../components/Card';

class Wager extends Component {
    constructor(props = {}) {
        super(props);

        this.state = {
            title: null,
            body: null,
            startDate: null,
            endDate: null
        }
    }

    render() {
        return (
          <Card>
            here we set the wager stuff!
          </Card>
        )
    }
}
