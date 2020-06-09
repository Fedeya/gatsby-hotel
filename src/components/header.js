import React from 'react';
import styled from 'styled-components';

import Navigation from './nav';

const HeaderStyles = styled.header`
  background-color: #333;
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

const HeadingTitle = styled.h1`
  color: #FFF;
  text-align: center;
`;

const Header = () => (
  <HeaderStyles>
    <Heading>
      <HeadingTitle>Hotel Gatsby</HeadingTitle>
      <Navigation />
    </Heading>
  </HeaderStyles>
);

export default Header;