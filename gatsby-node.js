/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = async ({ actions, graphql, reporter }) => {
  const result  = await graphql(`
    query {
      rooms: allDatoCmsRoom {
        nodes {
         slug
        }
      }
    }
  `);

  if (result.error) {
    reporter.panic('there where no results ', result.error);
  }

  const rooms = result.data.rooms.nodes;

  rooms.forEach(room => {
    actions.createPage({
      path: room.slug,
      component: require.resolve('./src/components/room.js'),
      context: {
        slug: room.slug
      }
    });
  });
}