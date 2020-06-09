import React from "react";
import { Helmet } from 'react-helmet';
import { createGlobalStyle } from 'styled-components';

import Header from "./header";
import Footer from "./footer";

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }

  body {
    font-size: 18px;
    font-size: 1.8rem;
    line-height: 1.5;
    font-family: 'PT Sans', sans-serif;
  }

  h1, h2, h3 {
    margin: 0;
    line-height: 1.5;
  }

  h1, h2 {
    font-family: 'Roboto', serif;
  }

  h3 {
    font-family: 'PT Sans', sans-serif;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

`;

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <title>Gatsby Hotel</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=PT+Sans:400,700|Roboto:400,700&display=swap"/>
      </Helmet>

      <GlobalStyle />

      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
