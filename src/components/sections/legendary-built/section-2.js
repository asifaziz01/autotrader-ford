import React from 'react'
import ReactHtmlParser from 'react-html-parser'
import Img from 'gatsby-image/withIEPolyfill'

export default ({ data }) => {
  const {
    headingUpper,
    contentUpper,
    imageUpper,
    headingLower,
    contentLower,
    imageLower,
  } = data

  return (
    <section className="section-2">
      <div className="section-area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="heading-upper">
                <h4>{headingUpper}</h4>
              </div>
            </div>
            <div className="col-lg-6 px-xl-0 align-self-end">
              <div className="content-upper">
                {ReactHtmlParser(contentUpper)}
              </div>
            </div>
            <div className="col-lg-12">
              <Img
                className="img-section-2"
                fluid={imageUpper.childImageSharp.fluid}
                alt="Image Upper"
              />
            </div>
            <div className="col-lg-6">
              <div className="heading-lower">
                <h6>{headingLower}</h6>
              </div>
            </div>
            <div className="col-lg-6 px-xl-0">
              <div className="content-lower">
                {ReactHtmlParser(contentLower)}
              </div>
            </div>
            <div className="col-lg-12">
              <Img
                className="img-section-2 lower"
                fluid={imageLower.childImageSharp.fluid}
                alt="Image Lower"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
