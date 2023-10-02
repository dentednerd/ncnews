import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ArticleCard from '../molecules/ArticleCard';
import WhiteTitle from '../atoms/WhiteTitle';

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

const MostPopular = ({ articles, topic }) => {
  const currentArticles = articles.filter(article => article.topic === topic).sort((a,b) => b.votes - a.votes).slice(0,4);

  return (
    <>
      <WhiteTitle>{topic}</WhiteTitle>
      {currentArticles.length > 3 && <ArticleCard article={currentArticles[0]} />}
      <MostRecentContainer currentArticles={currentArticles}>
        {currentArticles.slice(currentArticles.length > 3 ? 1 : 0,4).map(article => (
          <ArticleCard article={article} key={article.article_id} />
        ))}
      </MostRecentContainer>
    </>
  );
}

MostPopular.defaultProps = {
  articles: []
}

MostPopular.propTypes = {
  fetchArticles: PropTypes.func,
  articles: PropTypes.array
};

export default MostPopular;
