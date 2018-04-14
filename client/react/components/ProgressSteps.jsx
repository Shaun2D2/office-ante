import React from 'react';

const ProgressSteps = (props) => (
  <div style={{ marginTop: 50, marginBottom: 25 }}>
    <ul className="steps is-narrow is-medium is-centered has-content-centered">
        {props.steps.map((step, index) => (
          <li key={index} className={`steps-segment ${props.step === index ? 'is-active' : ''}`}>
            <a href="#" className={`has-text-dark`}>
              <span className="steps-marker">
                <span className="icon">
                  <i className={`fa ${step.icon}`} />
                </span>
              </span>
              <div className="steps-content">
                <p className="heading">{step.title}</p>
              </div>
            </a>
          </li>
        ))}
    </ul>
  </div>
);

export default ProgressSteps;
