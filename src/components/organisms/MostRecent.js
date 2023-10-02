import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ArticleCard from '../molecules/ArticleCard';

const MostRecentContainer = styled.section`
  display: flex;
  flex-flow: column nowrap;
  gap: 1rem;
  width: 100%;
  margin-bottom: 1rem;

  @media(min-width: 768px) {
    flex-flow: row nowrap;
    justify-content: space-between;
  }

  img.header {
    margin: -2rem 0 1rem -2rem;
    width: calc(100% + 4rem);
    object-fit: cover;
    height: 15rem;
  }
`;

const MostRecent = ({ articles }) => (
  <MostRecentContainer>
    {articles.sort((a, b) => a.article_id - b.article_id).filter(article => article.topic === "football")
      .map((article, index) => {
        if (index > 0) return null;
        return <ArticleCard article={article} key={article.article_id} />
      })
    }
    {articles.filter(article => article.topic === "cooking")
      .map((article, index) => {
        if (index > 0) return null;
        return <ArticleCard article={article} key={article.article_id} />
      })
    }

    {articles.filter(article => article.topic === "coding")
      .map((article, index) => {
        if (index > 0) return null;
        return <ArticleCard article={article} key={article.article_id} />
      })
    }
  </MostRecentContainer>
);

MostRecent.defaultProps = {
  articles: []
}

MostRecent.propTypes = {
  fetchArticles: PropTypes.func,
  articles: PropTypes.array
};

export default MostRecent;
