import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchUserBets } from '../redux/modules/bets';

class Dashboard extends Component {
      constructor(props = {}) {
          super(props);

      }

      componentWillMount() {
          this.props.getUserBets();
      }

      render() {
        return (
            <div>
                dashboard page with redux awesome sauce!
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
)(Dashboard);

export { Dashboard };
