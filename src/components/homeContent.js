import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import styled from 'styled-components';

const Title = styled.h2`
  font-size: 4rem;
  text-align: center;
  margin-top: 4rem;
`;

const StartText = styled.div`
  padding-top: 4rem;
  max-width: 1200px;
  width: 95%;
  margin: 0 auto 4rem;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }

  p {
    line-height: 2;
  }
`;

const HomeContent = () => {

  const { page } = useStaticQuery(graphql`
    query {
      page: datoCmsPage(slug: {eq: "home"}) {
        title
        content
        image {
          fluid(maxWidth: 1200) {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }  
  `);

  const { title, content, image } = page;

  return (
    <>
      <Title>{title}</Title>
      <StartText>
        <p>{content}</p>
        <Image fluid={image.fluid} alt={title} />
      </StartText>
    </>
  )
}

export default HomeContent;