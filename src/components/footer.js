import React from 'react';
import { css } from 'styled-components';

const Footer = () => {
  const year = new Date().getFullYear()
  
  return (
    <footer>
      <p
        css={css`
          text-align: center;
          color: #fff;
          background-color: rgb(33, 44, 55);
          margin: 0;
          padding: 1rem;
        `}
      >
        Gatsby Hotel. All rights reserved {year} &copy;
      </p>
    </footer>
  );  
}
export default Footer;