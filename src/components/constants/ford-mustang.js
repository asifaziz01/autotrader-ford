import { graphql, useStaticQuery } from 'gatsby'

const FordMustang = () => {
  const {
      fordMustangMd,
      fordMustang,
      neilAvatar,
      fordSection2,
      fordSection3,
    } = useStaticQuery(graphql`
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
        fordSection2: file(relativePath: { eq: "ford-mustang-s-2.png" }) {
          childImageSharp {
            fixed(width: 2518, height: 1200) {
              ...GatsbyImageSharpFixed
            }
            fluid(maxWidth: 2518, maxHeight: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        fordSection3: file(relativePath: { eq: "ford-mustang-s-3.jpg" }) {
          childImageSharp {
            fixed(width: 2520, height: 1200) {
              ...GatsbyImageSharpFixed
            }
            fluid(maxWidth: 2520, maxHeight: 1200) {
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
      section2: {
        headingUpper: `Lorem Ipsum Doloris Header Copy`,
        contentUpper: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>`,
        imageUpper: fordSection2,
        headingLower: `“Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. ”`,
        contentLower: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?`,
        imageLower: fordSection3,
      },
      section3: {},
    },
    data = {
      seo: seo,
      sections: sections,
    }

  return data
}
export default FordMustang
