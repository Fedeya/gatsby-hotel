import { graphql, useStaticQuery } from 'gatsby';

const useRooms = () => {
  
  const { rooms } = useStaticQuery(graphql`
    query {
      rooms: allDatoCmsRoom {
        nodes {
          id
          title
          content
          slug
          image {
            fluid(maxWidth: 1200) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }  
  `);

  return rooms.nodes;

}

export default useRooms;