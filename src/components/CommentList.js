import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

class CommentList extends React.Component {
  shouldComponentUpdate (nextProps) {
    if (this.props !== nextProps) return true;
    else return false;
  }

  render () {
    return (
      <div>
        {this.props.selectedComments.map((comment) => <Comment key={comment.comment_id} comment={comment}/>)}
      </div>
    );
  }
}

export default CommentList;

CommentList.propTypes = {
    selectedComments: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
};
