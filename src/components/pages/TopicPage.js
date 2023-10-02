import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ArticleCard from '../molecules/ArticleCard';
import WhiteTitle from '../atoms/WhiteTitle';
import * as actions from '../../redux/actions';

class TopicPage extends React.Component {
  componentDidMount () {
    this.props.fetchArticlesByTopic(this.props.match.params.topic);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.topic !== this.props.match.params.topic) {
      this.props.fetchArticlesByTopic(this.props.match.params.topic);
    }
  }

  render () {
    if (!this.props.articles) return <p>yikes</p>;

    return (
      <div>
        <WhiteTitle>{this.props.match.params.topic}</WhiteTitle>
        {this.props.articles.map(article => <ArticleCard key={article.article_id} article={article} />)}
      </div>
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

function MapStateToProps (state) {
  console.log({ state });
  return {
    articles: state.articles,
    loading: state.loading,
  };
}

TopicPage.defaultProps = {
  articles: []
}

TopicPage.propTypes = {
  fetchArticlesByTopic: PropTypes.func,
  articles: PropTypes.array,
  match: PropTypes.object.isRequired
};

export default connect(MapStateToProps, mapDispatchToProps) (TopicPage);
