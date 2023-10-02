import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ArticleCard from './ArticleCard';
import Profile from './Profile';
import * as actions from '../actions/actions';

class ArticleList extends React.Component {
  componentDidMount() {
    this.props.fetchArticles();
  }

  render() {
    return (
      <main className="columns">
        <div className="column is-three-quarters" id='ArticleList'>
          {this.props.articles.map(article => (
            <ArticleCard
              title={article.title}
              author={article.author}
              votes={article.votes}
              key={article.title}
              topic={article.topic}
              article_id={article.article_id}
            />))}
        </div>
        <Profile />
      </main>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchArticles: () => {
      dispatch(actions.fetchArticles());
    }
  };
}

function MapStateToProps(state) {
  return {
    articles: state.articles,
    loading: state.loading
  };
}

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
}

export default connect(MapStateToProps, mapDispatchToProps)(ArticleList);
