import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import styled from 'styled-components';

const Title = styled.h2`
  margin-top: 4rem;
  text-align: center;
  font-size: 4rem;
`;

const Content = styled.main`
  padding-top: 4rem;
  max-width: 1200px;
  width: 95%;
  margin: 0 auto 4rem;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 3rem;
  }

  p {
    line-height: 2;
    margin-top: 2rem;
  }
`;

const AboutContent = () => {

  const { page } = useStaticQuery(graphql`
    query {
      page: datoCmsPage(slug: {eq: "about"}) {
        title
        content
        image {
          fluid(maxWidth: 1200) {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }  
  `)

  const { title, content, image } = page;

  return (
    <>
      <Title>{title}</Title>
      <Content>
        <p>{content}</p>
        <Image fluid={image.fluid} />
      </Content>
    </>
  );
}

export default AboutContent;