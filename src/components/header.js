import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import Navigation from './nav';

const HeaderStyles = styled.header`
  background-color: #222;
  padding: 1rem;
`;

const Heading  = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const HeadingLink = styled(Link)`
  color: #FFF;
  text-align: center;
  text-decoration: none;
`;

const Header = () => (
  <HeaderStyles>
    <Heading>
      <HeadingLink to="/">
        <h1>Gatsby Hotel</h1>
      </HeadingLink>
      <Navigation />
    </Heading>
  </HeaderStyles>
);

export default Header;