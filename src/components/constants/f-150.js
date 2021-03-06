import { graphql, useStaticQuery } from 'gatsby'

const F150 = () => {
  const { f150Md, f150, travisAvatar } = useStaticQuery(graphql`
      {
        f150Md: file(relativePath: { eq: "f-150-md.jpg" }) {
          childImageSharp {
            fixed(width: 2880, height: 1598) {
              ...GatsbyImageSharpFixed
            }
            fluid(maxWidth: 2880, maxHeight: 1598) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        f150: file(relativePath: { eq: "f-150.jpg" }) {
          childImageSharp {
            fixed(width: 746, height: 1238) {
              ...GatsbyImageSharpFixed
            }
            fluid(maxWidth: 746, maxHeight: 1238) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        travisAvatar: file(relativePath: { eq: "travis.jpg" }) {
          childImageSharp {
            fixed(width: 148, height: 148) {
              ...GatsbyImageSharpFixed
            }
            fluid(maxWidth: 148, maxHeight: 148) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `),
    seo = {
      title: `EXPERT BUILT: F-150`,
      description: ``,
    },
    sections = {
      hero: {
        images: {
          mobileOrPhablet: f150,
          tabletOrDesktop: f150Md,
        },
        breadcrumb: {
          parentLabel: `PERFECT FIT`,
          currentLabel: `EXPERT BUILT: THE F-150`,
          cta: {
            label: `LEARN MORE`,
            link: `/`,
          },
        },
        contentArea: { smallTitle: `THE FORD`, bigTitle: `F-150` },
        reviewArea: {
          avatar: travisAvatar,
          reviewer: `Travis Persaud`,
          from: `autoTRADER`,
          content: `<p>The all-new F-150 is purpose-built from the ground up — redesigned to be the toughest, <strong>most productive F-150 ever.</strong> This is what happens when you accesorize it with accessories like the tonneau, the bed cover or the step bars. Learn how this contractors choose their accessories according to <strong>what matters most to them.</strong></p>`,
        },
      },
    },
    data = {
      seo: seo,
      sections: sections,
    }
  return data
}
export default F150
