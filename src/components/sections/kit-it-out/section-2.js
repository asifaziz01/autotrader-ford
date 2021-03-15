/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
import React from 'react'
import ReactHtmlParser from 'html-react-parser'
import Img from 'gatsby-image/withIEPolyfill'

export default ({ data }) => {
  const {
    headingCName,
    headingText,
    imageLeft,
    contentPTop,
    contentPBottomL,
    contentPBottomR,
  } = data

  return (
    <section className="cta-section">
      <div className="container-fluid">
        <div className="row ">
          <div className="col-lg-12">
            <div className="section-wrapper">
              <div className="heading-upper border-bottom">
                <h2><strong>{headingCName}</strong> {headingText}</h2>
              </div>
            </div>            
          </div>

          <div className="row">
            <div className="col-lg-4">
            </div>
            <div className="col-lg-8">
              <div className="section-wrapper">
                <p>{contentPTop}</p>
              </div>
              <div className="row ">
                <div className="col-lg-8">
                  <div className="section-wrapper">
                    {contentPBottomL}
                  </div>
                </div>
                <div className="col-lg-4">
                  {contentPBottomR}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
