import React, { Component } from 'react';
import { connect } from 'react-redux';

import { closeModal } from './../../../redux/modules/modal';

class RootModal extends Component {
    constructor(props = {}) {
        super(props);

        this.state = {
            open: true
        }
    }

    componentWillReceiveProps(props) {
        if (props.openModal !== this.state.open) {
            this.setState({ open: props.openModal });
        }
    }

    render() {
        if(!this.state.open) {
            return null;
        }

        return (
          <div className="modal is-active">
            <div className="modal-background"></div>
            <div className="modal-content">
              <p className="image is-4by3">
                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="" />
              </p>
            </div>
            <button
                className="modal-close is-large"
                aria-label="close"
                onClick={this.props.closeModal}
            />
          </div>
        )
    }
}

const mapStateToProps = (state) => ({
    openModal: state.getIn(['modal', 'open'])
});

const mapDispatchToProps = (dispatch) => ({
    closeModal: () => dispatch(closeModal())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RootModal);

export { RootModal };
