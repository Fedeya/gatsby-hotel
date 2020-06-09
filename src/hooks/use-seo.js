import { grapqhl, useStaticQuery } from 'gatsby';

const useSeo = () => {
  const { site } = useStaticQuery(graphql`
    query {
      site: datoCmsSite {
        globalSeo {
          titleSuffix
          siteName
          fallbackSeo {
            title
            description
          }
        }
      }
    }
  `);

    return site.globalSeo;
}

export default useSeo;