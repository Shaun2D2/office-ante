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
    },
    {
        title: 'High Five',
        icon: 'fa-hand-paper'
    },
    {
        title: 'Coffee',
        icon: 'fa-coffee'
    },
    {
        title: 'Movie Ticket',
        icon: 'fa-ticket-alt'
    },
    {
        title: 'Movie Rental',
        icon: 'fa-film'
    },
    {
        title: 'Fist Bump',
        icon: 'fa-hand-rock'
    },
    {
        title: 'Crown',
        icon: 'fa-chess-queen'
    }

];

class Stakes extends Component {

    render() {
        return (
            <div>
              <h1 className="is-size-4">Select the stakes!</h1>
              <div className="columns is-multiline">
                  {defaultStakes.map((stake) => (
                    <div className="column is-one-third">
                        <div className="box text-center">
                          <h1 className="is-size-3 has-text-centered">{stake.title}</h1>
                          <div className="has-text-centered">
                              <i className={`fa ${stake.icon} is-size-1`} />
                          </div>
                        </div>
                    </div>
                  ))}
              </div>
            </div>
        )
    }
}

export default Stakes;
