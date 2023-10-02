import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledFooter = styled.footer`
background: -webkit-radial-gradient(center top, rgba(160, 201, 215, 0.8) 0%, rgba(160, 201, 215, 0) 70%), -webkit-linear-gradient(bottom, #050C54 0%, #354262 9%, #2C3551 48%, #282F44 94%, black 100%);
  color: white;
  padding: 1rem;
  box-shadow: -1px -1px 5px #000;

  section.wrapper {
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: space-between;
    gap: 14px;

    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
    }

    h3, a {
      color: white;
    }
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <section className="wrapper">
        <div>
          <h3>NCNews v2</h3>
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
    </StyledFooter>
  );
}
