import { graphql, useStaticQuery } from 'gatsby'

const FordMustang = () => {
  const { fordMustangMd, fordMustang, neilAvatar } = useStaticQuery(graphql`
      {
        fordMustangMd: file(relativePath: { eq: "ford-mustang-md.jpg" }) {
          childImageSharp {
            fixed(width: 2880, height: 1598) {
              ...GatsbyImageSharpFixed
            }
            fluid(maxWidth: 2880, maxHeight: 1598) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        fordMustang: file(relativePath: { eq: "ford-mustang.jpg" }) {
          childImageSharp {
            fixed(width: 746, height: 1334) {
              ...GatsbyImageSharpFixed
            }
            fluid(maxWidth: 746, maxHeight: 1334) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        neilAvatar: file(relativePath: { eq: "neil.png" }) {
          childImageSharp {
            fixed(width: 148, height: 143) {
              ...GatsbyImageSharpFixed
            }
            fluid(maxWidth: 148, maxHeight: 143) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `),
    seo = {
      title: `LEGENDARY BUILT: THE MUSTANG`,
      description: ``,
    },
    sections = {
      hero: {
        images: {
          mobileOrPhablet: fordMustang,
          tabletOrDesktop: fordMustangMd,
        },
        breadcrumb: {
          parentLabel: `PERFECT FIT`,
          currentLabel: `LEGENDARY BUILT: THE MUSTANG`,
          cta: {
            label: `LEARN MORE`,
            link: `/`,
          },
        },
        contentArea: { smallTitle: `THE FORD`, bigTitle: `Mustang` },
        reviewArea: {
          avatar: neilAvatar,
          reviewer: `Neil Vorano`,
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
export default FordMustang
