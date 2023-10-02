import React from 'react';

export default function About() {
  return (
    <section className="content">
      <h2>What's this then?</h2>
      <p>Northcoders News is a social news aggregation, web content rating, and discussion website, featuring stories arranged by topic. Each story can be up- or down-voted, and users can comment and vote upon each story. This project is created from a sprint on the <a href="https://www.northcoders.com">Northcoders</a> bootcamp.</p>

      <h3>How did you build the back end?</h3>
      <p>The API is an <a href="https://expressjs.com/">Express</a> server on top of a <a href="https://www.postgresql.org/">PostgreSQL</a> database, hosted on <a href="https://www.heroku.com">Heroku</a>.</p>
      <p><a href="https://github.com/dentednerd/nc-news-sql-dentednerd">Take a look at the back end repo on Github.</a></p>

      <h3>How did you build the front end?</h3>
      <p>The website is built in <a href="https://reactjs.org/">React</a>, as always, with an <a href="https://bradfrost.com/blog/post/atomic-web-design/">Atomic Design</a> approach to component creation. I used <a href="https://styled-components.com/">styled-components</a> for CSS-in-JS.</p>
      <p><a href="https://github.com/dentednerd/nc-news-2">Take a look at the front end repo on Github.</a></p>

      <h3>What's the v2 about? Is this the second version of this website?</h3>
      <p>Yes! There's also a <>first version</> and a <>third version</>. I talk in detail about this version in <a href="https://www.joeyimlay.dev/posts/northcoders-news-revisited/">this journal post</a>.</p>
    </section>
  )
}
