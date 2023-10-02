import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`
  background: -webkit-radial-gradient(center bottom, rgba(160, 201, 215, 0.8) 0%, rgba(160, 201, 215, 0) 70%), -webkit-linear-gradient(top, black 0%,#282F44 6%,#2C3551 52%,#354262 91%,#050C54 100%);
  margin-bottom: 2rem;
  padding:0;
  height: 3rem;
  box-shadow: 1px 1px 5px #000;
  color:#FFF;
  padding: 0 1rem;
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  height: 3rem;
  display:flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  font-family: 'Zilla Slab', serif;
  font-size:2rem;
  line-height:60px;
  color:#fff;
  text-shadow: -1px -1px 3px #000;
  white-space:nowrap;
  overflow:hidden;
`;

class Navbar extends React.Component {
  render() {
    return (
      <StyledNav>
        <Container>
          <Link to="/">
            <Title>Northcoders News</Title>
          </Link>
        </Container>
      </StyledNav>
    );
  }
}

export default Navbar;
