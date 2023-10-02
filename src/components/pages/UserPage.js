import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import Profile from '../organisms/Profile';
import CommentList from '../organisms/CommentList';
import MostPopular from '../organisms/MostPopular';
import WhiteTitle from '../atoms/WhiteTitle';

class UserPage extends React.Component {
  componentDidMount () {
    this.props.fetchUserByUsername(this.props.match.params.username);
    this.props.fetchArticlesByUser(this.props.match.params.username);
    this.props.fetchCommentsByUser(this.props.match.params.username);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.username !== this.props.match.params.username) {
      this.props.fetchArticlesByUser(this.props.match.params.username);
      this.props.fetchCommentsByUser(this.props.match.params.username);
    }
  }

  render () {
    if (!this.props.users.length || !this.props.articles.length || !this.props.selectedComments.length) return null;
    const thisUser = this.props.users.filter(user => user.username === this.props.match.params.user_id)[0];

    return (
      <div>
        <Profile user={thisUser} />
        <MostPopular articles={this.props.articles} topic="coding" />
        <MostPopular articles={this.props.articles} topic="cooking" />
        <MostPopular articles={this.props.articles} topic="football" />
        <WhiteTitle>comments</WhiteTitle>
        <CommentList selectedComments={this.props.selectedComments} />
      </div>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchUserByUsername: (username) => {
      dispatch(actions.fetchUserByUsername(username));
    },
    fetchArticlesByUser: (id) => {
      dispatch(actions.fetchArticlesByUser(id));
    },
    fetchCommentsByUser: (id) => {
      dispatch(actions.fetchCommentsByUser(id));
    }
  };
}

function MapStateToProps (state) {
  return {
    users: state.allUsers,
    articles: state.articles,
    selectedComments: state.selectedComments
  };
}

UserPage.defaultProps = {
  users: [],
  articles: [],
  selectedComments: []
}

UserPage.propTypes = {
    users: PropTypes.array,
    articles: PropTypes.array,
    selectedComments: PropTypes.array,
    fetchUserByUsername: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired
};

export default connect(MapStateToProps, mapDispatchToProps) (UserPage);
