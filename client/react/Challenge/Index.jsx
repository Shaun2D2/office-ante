import React, { Component } from 'react';

import ProgressSteps from '../components/ProgressSteps';
import FindChallenger from './views/FindChallenger';
import Wager from './views/Wager';

const steps = [
    {
        title: 'Find Challenger',
        icon: 'fa-users'
    },
    {
        title: 'Wager',
        icon: 'fa-gavel'
    },
    {
        title: 'Stakes',
        icon: 'fa-trophy'
    },
    {
        title: 'Confirmation',
        icon: 'fa-check'
    },
];

class Challenge extends Component {
    constructor(props = {}) {
        super(props);

        this.state = {
            step: 1,
            challenger: null,
            title: null,
            body: null,
            wager: null,
            startDate: null,
            endDate: null
        }

        this.getView = this.getView.bind(this);
        this.moveForward = this.moveForward.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(name, value) {
        this.setState({ [name]: value });
    }

    moveForward() {
        this.setState({ step: this.state.step + 1 });
    }

    getView() {
        const { step } = this.state;

        if(step === 1){
            return (
                <FindChallenger
                    moveForward={this.moveForward}
                    handleChange={this.handleChange}
                />
            )
        }

        if(step === 2) {
            return (
              <Wager
                  moveForward={this.moveForward}
                  handleChange={this.handleChange}
              />
            )
        }

    }

    render() {
        return (
          <div className="container">
            <ProgressSteps
              steps={steps}
              step={this.state.step - 1}
            />
            {this.getView()}
          </div>
        )
    }
}

export default Challenge;
