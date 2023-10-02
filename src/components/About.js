import React from 'react';

export default function About() {
  return (
    <section className="about-content">
      <h2>What's this then?</h2>
      <p>Northcoders News is a social news aggregation, web content rating, and discussion website, featuring stories arranged by topic. Each story can be up- or down-voted, and users can comment and vote upon each story. This project is created from a sprint on the <a href="https://www.northcoders.com">Northcoders</a> bootcamp.</p>

      <h3>How did you build the back end?</h3>
      <p>The API is an <a href="https://expressjs.com/">Express</a> server on top of a <a href="https://www.postgresql.org/">PostgreSQL</a> database, hosted on <a href="https://www.heroku.com">Heroku</a>.</p>
      <p><a href="https://github.com/dentednerd/nc-news-sql-dentednerd">Take a look at the back end repo on Github.</a></p>

      <h3>How did you build the front end?</h3>
      <p>The website is built in <a href="https://reactjs.org/">React</a>, using <a href="https://redux.js.org/">Redux</a> to fetch data, <a href="https://v5.reactrouter.com/web/guides/quick-start">React-Router</a> for navigation, and <a href="https://bulma.io/">Bulma</a> for styling.</p>
      <p><a href="https://github.com/dentednerd/nc-news-2">Take a look at the front end repo on Github.</a></p>

      <h3>What's the v1 about? Is this the first version of this website?</h3>
      <p>Yes! There's also a <a href="https://northcoders-news-dentednerd-v2.herokuapp.com/">second</a> and a <a href="https://dentednerds-northcoders-news.netlify.app/">third version</a>.</p>
    </section>
  )
}
