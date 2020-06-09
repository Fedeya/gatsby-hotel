import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import styled from 'styled-components';

const ImageBackground = styled(BackgroundImage)`
  height: 500px;

  @media (min-width: 1440px) {
    height: 700px;
  }
`;

const ImageText = styled.div`
  background-image: linear-gradient(to top, rgba(34, 49, 63, .85), rgba(34, 49, 63, .85));
  color: #FFF;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;

  h2 {
    font-size: 4rem;
    margin: 0;

    @media (min-width: 992px) {
      font-size: 5.8rem;
    }
  }

  p {
    font-size: 2rem;

    @media (min-width: 992px) {
      font-size: 2.6rem;
    }
  }
`;

const HotelImage = () => {

  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "8.jpg"} ) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <ImageBackground tag="section" fluid={image.sharp.fluid}>
      <ImageText>
        <h2>Welcome to Gatsby Hotel</h2>
        <p>The best hotel for your holidays</p>
      </ImageText>
    </ImageBackground>
  );
}

export default HotelImage;