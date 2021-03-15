import { graphql, useStaticQuery } from 'gatsby'

const FordEscape = () => {
  const {
      fordEscapeMd,
      fordEscape,
      travisAvatar,
      fordSection2,
      fordSection3,
    } = useStaticQuery(graphql`
      {
        fordEscapeMd: file(relativePath: { eq: "ford-escape-md.jpg" }) {
          childImageSharp {
            fixed(width: 2880, height: 1598) {
              ...GatsbyImageSharpFixed
            }
            fluid(maxWidth: 2880, maxHeight: 1598) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        fordEscape: file(relativePath: { eq: "ford-escape.jpg" }) {
          childImageSharp {
            fixed(width: 746, height: 1334) {
              ...GatsbyImageSharpFixed
            }
            fluid(maxWidth: 746, maxHeight: 1334) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        travisAvatar: file(relativePath: { eq: "travis.jpg" }) {
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
          mobileOrPhablet: fordEscape,
          tabletOrDesktop: fordEscapeMd,
        },
        breadcrumb: {
          parentLabel: `PERFECT FIT`,
          currentLabel: `KIT IT OUT: THE FORD ESCAPE`,
          cta: {
            label: `LEARN MORE`,
            link: `/`,
          },
        },
        contentArea: { smallTitle: `THE FORD`, bigTitle: `Escape` },
        reviewArea: {
          avatar: travisAvatar,
          reviewer: `Travis Persaud`,
          from: `autoTRADER`,
          content: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam.`,
        },
      },
      section2: {
        headingCName: `Julian and Sarah Garner`,
        headingText: `wanted more adventure in their life.`,
        imageLeft: fordSection2,
        contentPTop: `Forced to work from home for the last year, the couple, along with their dog Otis, went out for hikes along the Humber River in Toronto as much as possible. But, they were craving something more. Sarah’s friend invited them to go paddleboarding in the summer. They loaded up their 2020 Ford Escape, drove to the Muskokas and fell in love with the sport.`,
        contentPBottomL: `Now, they’ve outfitted their Escape with accessories to better support their new hobby. “We’re planning to paddleboard as much as we can this summer, so we totally kitted out our ride!” Sarah says, with a glowing grin. We chat with Julian and Sarah to learn how they’ve outfitted their Ford Escape for paddleboard adventures, and the trip they’re most looking forward to this summer.`,
        contentPBottomR: `“We’re out in nature, staying active and clearing our minds,” Julian says. “It’s a perfect and safe way to connect with friends.”`,
      },
      section3: {},
    },
    data = {
      seo: seo,
      sections: sections,
    }

  return data
}
export default FordEscape
