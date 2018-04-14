import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchUserBets } from '../redux/modules/bets';
import BetCard from './components/BetCard';

class Challenges extends Component {
      constructor(props = {}) {
          super(props);

      }

      componentWillMount() {
          this.props.getUserBets();
      }

      render() {
        return (
            <div className="container">
                <div className="tabs">
                  <ul>
                    <li className="is-active"><a>Active</a></li>
                    <li><a>Waiting Settlement</a></li>
                    <li><a>Old</a></li>
                  </ul>
                </div>

                <BetCard />
                <BetCard />
                <BetCard />
                <BetCard />
                <BetCard />
                <BetCard />
            </div>
        )
      }
}

const mapDispatchToProps = (dispatch) => ({
    getUserBets: () => dispatch(fetchUserBets())
});

export default connect(
  null,
  mapDispatchToProps
)(Challenges);

export { Challenges };
