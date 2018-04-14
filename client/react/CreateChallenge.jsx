import React from 'react';

import ProgressSteps from './components/ProgressSteps';
import TypeAhead from './components/TypeAhead';
import Card from './components/Card';

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

const CreateChallenge = () => (
  <div className="container">
    <br />
    <ProgressSteps
      steps={steps}
      step={0}
    />
  <Card>
    <h1 className="is-size-4">Find a Challenger</h1>
    <p style={{ marginBottom: 10 }}>In order to start a challenge, let's find a challenger!</p>
    <div className="field">
      <TypeAhead />
    </div>
    <button className="button is-primary">Onward!</button>
  </Card>
  </div>
)

export default CreateChallenge;
