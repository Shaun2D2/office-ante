import React, { Component } from 'react';

import ProgressSteps from '../components/ProgressSteps';
import FindChallenger from './views/FindChallenger';

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
            wager: null,
            startDate: null,
            endDate: null
        }

        this.getView = this.getView.bind(this);
        this.moveForward = this.moveForward.bind(this);
    }

    moveForward() {
        this.setState({ step: this.state.step++ });
    }

    getView() {
        const { step } = this.state;

        if(step === 1){
            return (
                <FindChallenger
                    moveForward={this.moveForward}
                />
            )
        }

    }

    render() {
        return (
          <div className="container">
            <ProgressSteps
              steps={steps}
              step={0}
            />
            {this.getView()}
          </div>
        )
    }
}

export default Challenge;
