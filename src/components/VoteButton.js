import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../actions/actions';

class VoteButton extends React.Component {
  render() {
    return (
      <div className="vote">
        <span className="vote-count">
          {this.props.votes}
        </span>
        <div className="vote-button-container">
          <button onClick={this.props.articleVoteUp.bind(this)}>+</button>
          <button onClick={this.props.articleVoteDown.bind(this)}>-</button>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    articleVoteUp: function () {
      dispatch(actions.articleVoteUp(this.props.id));
    },
    articleVoteDown: function () {
      dispatch(actions.articleVoteDown(this.props.id));
    }
  };
}

function mapStateToProps(state) {
  return state;
}

VoteButton.propTypes = {
  votes: PropTypes.number,
  id: PropTypes.string.isRequired,
  articleVoteUp: PropTypes.func,
  articleVoteDown: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(VoteButton);
