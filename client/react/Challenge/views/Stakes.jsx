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
    constructor(props = {}) {
        super(props);

        this.state = {
            selected: null
        }

        this.select = this.select.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    select(index) {
        this.setState({ selected: index });
    }

    handleSubmit() {
        this.props.handleChange('wager', defaultStakes[this.state.selected].title);
        this.props.moveForward();
    }

    render() {
        return (
            <div>
              <h1 className="is-size-4">Select the stakes!</h1>
              <p>Figure out what is at stake for this bet:</p>
              <hr />
              <div className="columns is-multiline">
                  {defaultStakes.map((stake, index) => (
                    <div className="column is-one-third" onClick={() => this.select(index)} key={index}>
                        <div className={`box text-center selectable ${ this.state.selected === index ? 'box-selected' : '' }`}>
                          <h1 className="is-size-3 has-text-centered">{stake.title}</h1>
                          <div className="has-text-centered">
                              <i className={`fa ${stake.icon} is-size-1`} />
                          </div>
                        </div>
                    </div>
                  ))}
              </div>
              <button className="button is-primary" onClick={this.handleSubmit}>Wrap up</button>
            </div>
        )
    }
}

export default Stakes;
