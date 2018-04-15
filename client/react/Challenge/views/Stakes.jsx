import React, { Component } from 'react';

class Stakes extends Component {

    render() {
        return (
            
            <div className="columns">
                <div className="column">
                    <div className="box text-center">
                      <h1 className="is-size-3 has-text-centered">Pie</h1>
                      <div className="has-text-centered">
                          <i className="fa fa-chart-pie is-size-1" />
                      </div>
                    </div>
                </div>
                <div className="column">
                    <div className="box">
                      2 Tacos
                    </div>
                </div>
                <div className="column">
                    <div className="box">
                      Tasty Lunch
                    </div>
                </div>
                <div className="column">
                    <div className="box">
                      Other
                    </div>
                </div>

            </div>
        )
    }
}

export default Stakes;
