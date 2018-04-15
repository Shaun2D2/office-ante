import React, { Component } from 'react';

const defaultStakes = [
    {
        title: 'Pie',
        icon: 'fa-chart-pie'
    },
    {
        title: 'Tacos',
        icon: 'fa-lemon'
    },
    {
        title: 'Lunch',
        icon: 'fa-utensils'
    }
]

class Stakes extends Component {

    render() {
        return (
            <div>
              <h1 className="is-size-4">Select the stakes!</h1>
              <div className="columns">
                  {defaultStakes.map((stake) => (
                    <div className="column">
                        <div className="box text-center">
                          <h1 className="is-size-3 has-text-centered">{stake.title}</h1>
                          <div className="has-text-centered">
                              <i className={`fa ${stake.icon} is-size-1`} />
                          </div>
                        </div>
                    </div>
                  ))}
                  <div className="column">
                      <div className="box">
                        <h1 className="is-size-3 has-text-centered">Other</h1>
                      </div>
                  </div>

              </div>
            </div>
        )
    }
}

export default Stakes;
