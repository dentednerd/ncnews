import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  render () {
    return (
        <nav>
          <h1>Northcoders News</h1>
          <Link className="topicLink" to="/">Home</Link>
          <Link className="topicLink" to="/topics/football">Football</Link>
          <Link className="topicLink" to="/topics/cooking">Cooking</Link>
          <Link className="topicLink" to="/topics/coding">Coding</Link>
        </nav>
    );
  }
}

export default Navbar;
