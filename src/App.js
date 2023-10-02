import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import ArticleList from './components/ArticleList';
import ArticlePage from './components/ArticlePage';
import TopicPage from './components/TopicPage';
import About from './components/About';
import Footer from './components/Footer';
import './style.css';

class App extends React.Component {
  render () {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/' component={ArticleList} />
          <Route path='/topics/:topic_id' component={TopicPage} />
          <Route path='/articles/:article_id' component={ArticlePage} />
          <Route path='/about' component={About} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
