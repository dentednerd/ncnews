import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ArticleCard = function ({ votes, topic, article_id, title, author }) {
  return (
    <article className="box columns my-4" style={{ marginBottom: "24px" }}>
      <div className="vote column is-1">
        <span className="vote-count">{votes}</span>
      </div>
      <div className="column">
        <span className="topic">{topic}</span>
        <Link to={'/articles/' + article_id}>
          <h2 className="title">{title}</h2>
          <span className="subtitle">by {author}</span>
        </Link>
      </div>
    </article>
  );
};

ArticleCard.propTypes = {
  article_id: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  topic: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
};

export default ArticleCard;
