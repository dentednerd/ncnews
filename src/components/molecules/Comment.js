import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Byline from '../molecules/Byline';

const StyledComment = styled.section`
  margin-bottom: 1rem;
  border-radius: 1rem;
  border: solid 1px #ddd;
  box-shadow: 1px 1px 3px #eee;
  background-color: #fff;
  padding: 1rem;
  overflow: hidden;
  word-wrap: break-word;
  width: calc(50% - 3rem);

  p {
    margin: 0 0 1rem 0;
  }

  a {
    color: #a0c9d7;
    border-bottom: dotted 1px #a0c9d7;
  }
`;

const CommentBody = styled.p`
  margin-bottom: 1rem;
`;

const Comment = (props)  => (
  <StyledComment>
    <p><Link to={`/articles/${props.comment.article_id}`}>&raquo; view article</Link></p>
    <CommentBody>{props.comment.body}</CommentBody>
    <Byline username={props.comment.author} time={props.comment.created_at} />
  </StyledComment>
);

Comment.propTypes = {
  comment: PropTypes.object.isRequired,
  user: PropTypes.object
};

export default Comment;
