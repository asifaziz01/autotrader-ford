import React from 'react'
import ReactHtmlParser from 'react-html-parser'
import Img from 'gatsby-image/withIEPolyfill'

export default ({ data }) => {
  const { headingUpper, contentUpper, image, headingLower, contentLower } = data

  return (
    <section className="section-2">
      <div className="section-area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="heading-upper">
                <h4>{headingUpper}</h4>
              </div>
            </div>
            <div className="col-md-6 px-md-0 align-self-end">
              <div className="content-upper">
                {ReactHtmlParser(contentUpper)}
              </div>
            </div>
            <div className="col-md-12">
              <Img
                className="img-section-2"
                fluid={image.childImageSharp.fluid}
                alt="Section 2 Image"
              />
            </div>
            <div className="col-md-6">
              <div className="heading-lower">
                <h6>{headingLower}</h6>
              </div>
            </div>
            <div className="col-md-6 px-md-0">
              <div className="content-lower">
                {ReactHtmlParser(contentLower)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
