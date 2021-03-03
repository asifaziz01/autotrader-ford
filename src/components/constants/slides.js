import { graphql, useStaticQuery } from 'gatsby'

const Slides = () => {
  const {
      buildWild,
      buildWildSm,
      expertBuilt,
      expertBuiltSm,
      legendaryBuilt,
      legendaryBuiltSm,
      kickItOut,
      kickItOutSm,
      effectDisplay,
    } = useStaticQuery(graphql`
      {
        buildWild: file(relativePath: { eq: "build-wild.jpg" }) {
          childImageSharp {
            fixed(width: 2880, height: 1800) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        buildWildSm: file(relativePath: { eq: "build-wild-small.jpg" }) {
          childImageSharp {
            fixed(width: 307, height: 307) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        expertBuilt: file(relativePath: { eq: "expert-built.jpg" }) {
          childImageSharp {
            fixed(width: 2880, height: 1800) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        expertBuiltSm: file(relativePath: { eq: "expert-built-small.jpg" }) {
          childImageSharp {
            fixed(width: 307, height: 307) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        legendaryBuilt: file(relativePath: { eq: "legendary-built.jpg" }) {
          childImageSharp {
            fixed(width: 2880, height: 1800) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        legendaryBuiltSm: file(
          relativePath: { eq: "legendary-built-small.jpg" }
        ) {
          childImageSharp {
            fixed(width: 307, height: 307) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        kickItOut: file(relativePath: { eq: "kick-it-out.jpg" }) {
          childImageSharp {
            fixed(width: 2880, height: 1800) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        kickItOutSm: file(relativePath: { eq: "kick-it-out-small.jpg" }) {
          childImageSharp {
            fixed(width: 307, height: 307) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        effectDisplay: file(relativePath: { eq: "disp1.jpg" }) {
          childImageSharp {
            fixed(width: 2048, height: 2048) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `),
    slideImages = [
      buildWild.childImageSharp.fixed.src,
      expertBuilt.childImageSharp.fixed.src,
      legendaryBuilt.childImageSharp.fixed.src,
      kickItOut.childImageSharp.fixed.src,
    ],
    cars = [
      {
        slideImage: buildWild.childImageSharp.fixed.src,
        navImage: buildWildSm.childImageSharp.fixed.src,
        model: `BRONCO SPORT`,
        bigHeading: `BUILT WILD`,
        description: `Explore <strong>Bronco Sport’s Accessories in our<br/>3D configurator</strong> and discover your perfect fit.`,
        ctaLabel: `ACCESSORIZE IT`,
        ctaLink: ``,
      },
      {
        slideImage: expertBuilt.childImageSharp.fixed.src,
        navImage: expertBuiltSm.childImageSharp.fixed.src,
        model: `FORD F-150`,
        bigHeading: `EXPERT BUILT`,
        description: `Check out how this person <strong>equipped his Ford F-150</strong> and how it helped him at work and on his daily life.`,
        ctaLabel: `READ ARTICLE`,
        ctaLink: ``,
      },
      {
        slideImage: legendaryBuilt.childImageSharp.fixed.src,
        navImage: legendaryBuiltSm.childImageSharp.fixed.src,
        model: `FORD MUSTANG`,
        bigHeading: `LEGENDARY BUILT`,
        description: `Check out <strong>how Steve McQueen would accessorize his Mustang</strong> today and how amazing it would look.`,
        ctaLabel: `DISCOVER MORE`,
        ctaLink: ``,
      },
      {
        slideImage: kickItOut.childImageSharp.fixed.src,
        navImage: kickItOutSm.childImageSharp.fixed.src,
        model: `FORD ESCAPE`,
        bigHeading: `KIT IT OUT`,
        description: `Explore <strong>Escape’s Accessories</strong> in and how this nice person prepared his vehicle to make it great.`,
        ctaLabel: `READ ARTICLE`,
        ctaLink: ``,
      },
    ],
    data = {
      effectSrc: effectDisplay.childImageSharp.fixed.src,
      cars: cars,
      slideImages: slideImages,
    }

  return data
}
export default Slides
