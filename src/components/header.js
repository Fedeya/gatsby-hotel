import React from 'react';
import styled from 'styled-components';

const HeaderStyles = styled.header`
  background-color: #333;
  padding: 1rem;
`;

const Heading  = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = () => (
  <HeaderStyles>
    <Heading>
      <h1>Hotel Gatsby</h1>
    </Heading>
  </HeaderStyles>
);

export default Header;