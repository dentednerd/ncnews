import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <section className="wrapper">
        <div>
          <h3>NCNews v1</h3>
        </div>
        <ul>
          <li>
            <Link to="/about">About (what's this then?)</Link>
          </li>
          <li>
            <a href="https://joeyimlay.dev">Contact (who is dentednerd?)</a>
          </li>
          <li>
            <a href="https://www.northcoders.com">Privacy Policy (what is Northcoders?)</a>
          </li>
        </ul>
      </section>
    </footer>
  );
}
