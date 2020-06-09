import React from 'react';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import { css } from 'styled-components';

import Layout from '../components/layout';

export const query = graphql`
  query ($slug: String!) {
    room: datoCmsRoom(slug: {eq: $slug}) {
      title
      content
      image {
        fluid(maxWidth: 1200) {
          ...GatsbyDatoCmsFluid
        }
      }
    }
  }
`;

const RoomTemplate = ({ data }) => {

  const { title, content, image } = data.room;

  return (
    <Layout>
      <main
        css={css`
          margin: 0 auto 4rem;
          max-width: 1200px;
          width: 95%;
        `}
      >
        <h2
          css={css`
            text-align: center;
            margin-top: 4rem;
          `}
        >
          {title}
        </h2>
        <p>{content}</p>
        <Image fluid={image.fluid} />
      </main>
    </Layout>
  );
}

export default RoomTemplate;