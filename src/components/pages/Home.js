import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MostRecent from '../organisms/MostRecent';
import MostPopular from '../organisms/MostPopular';
import * as actions from '../../redux/actions';

class Home extends React.Component {
  componentDidMount () {
    this.props.fetchArticles();
  }

  render () {
    if (!this.props.allArticles) return <p>No articles!</p>;
    return (
      <React.Fragment>
        <MostRecent articles={this.props.allArticles} />
        <MostPopular articles={this.props.allArticles} topic="coding" />
        <MostPopular articles={this.props.allArticles} topic="cooking" />
        <MostPopular articles={this.props.allArticles} topic="football" />
      </React.Fragment>
    )
  }
}

Home.propTypes = {
  fetchArticles: PropTypes.func,
  allArticles: PropTypes.array
};

function mapDispatchToProps (dispatch) {
  return {
    fetchArticles: () => {
      dispatch(actions.fetchArticles());
    }
  };
}

function MapStateToProps (state) {
  return {
    allArticles: state.articles,
    loading: state.loading
  };
}

export default connect(MapStateToProps, mapDispatchToProps) (Home);
