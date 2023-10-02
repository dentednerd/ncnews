import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ArticleCard from './ArticleCard';
import Profile from './Profile';
import * as actions from '../actions/actions';

class TopicPage extends React.Component {
  componentDidMount () {
    this.props.fetchArticlesByTopic(this.props.match.params.topic_id);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.topic_id !== prevProps.match.params.topic_id) {
      this.props.fetchArticlesByTopic(this.props.match.params.topic_id);
    }
  }

  render () {
    if (!this.props.articles) return null;
    return (
      <main className="columns">
        <div className="column is-three-quarters" id='TopicPage'>
          {this.props.articles.map(article => (
            <ArticleCard
              title={article.title}
              author={article.author}
              votes={article.votes}
              key={article.title}
              topic={article.topic}
              article_id={article.article_id}
            />
          ))}
        </div>
        <Profile />
      </main>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchArticlesByTopic: (topic) => {
      dispatch(actions.fetchArticlesByTopic(topic));
    }
  };
}

function mapStateToProps (state) {
  return {
    articles: state.articles,
    loading :state.loading
  };
}

TopicPage.propTypes = {
    fetchArticlesByTopic:PropTypes.func.isRequired,
    articles:PropTypes.array.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(TopicPage);
