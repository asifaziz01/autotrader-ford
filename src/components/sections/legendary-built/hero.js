/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
import React from 'react'
import ReactHtmlParser from 'html-react-parser'
import Img from 'gatsby-image/withIEPolyfill'
import { Link } from 'gatsby'

import Back from '../../../components/icons/back'
import ScrollDown from '../../../components/icons/scroll-down'

export default ({ data }) => {
  const { images, breadcrumb, contentArea, reviewArea } = data,
    { mobileOrPhablet, tabletOrDesktop } = images
  return (
    <section className="hero">
      <div className="bg-image-holder">
        <Img
          fluid={mobileOrPhablet.childImageSharp.fluid}
          alt="Hero-mobile"
          className="d-md-none"
        />
        <Img
          fluid={tabletOrDesktop.childImageSharp.fluid}
          alt="Hero-tablet-desktop"
          className="d-none d-md-block"
        />
      </div>
      <div className="hero-wrapper">
        <div className="hero-content">
          <div className="container-fluid">
            <div className="breadcrumb-area">
              <div className="d-flex">
                <div className="flex-grow-1 my-auto">
                  <div className="d-flex">
                    <div className="flex-shrink-1 my-auto">
                      <Link to="/" className="breadcrumb-back">
                        <Back />
                      </Link>
                    </div>
                    <div className="flex-grow-1 my-auto">
                      <p className="mb-0 d-none d-sm-block">
                        <Link to="/" className="breadcrumb-parent">
                          {breadcrumb.parentLabel}
                        </Link>
                        <span className="breadcrumb-trail">
                          {breadcrumb.currentLabel}
                        </span>
                      </p>
                      <p className="mb-0 d-sm-none">
                        <Link to="/" className="breadcrumb-parent">
                          BACK
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex-shrink-1 my-auto">
                  <Link to={breadcrumb.cta.link} className="breadcrumb-button">
                    {breadcrumb.cta.label}
                  </Link>
                </div>
              </div>
            </div>
            <div className="content-area">
              <div className="headings">
                <h5>{contentArea.smallTitle}</h5>
                <h1>{contentArea.bigTitle}</h1>
              </div>
            </div>
            <div className="review-area">
              <div className="review-block">
                <div className="review-avatar">
                  <Img
                    fluid={reviewArea.avatar.childImageSharp.fluid}
                    alt="Avatar"
                    className="avatar-img"
                  />
                </div>
                <div className="review-content">
                  <h3 className="author-name">{reviewArea.reviewer},</h3>
                  <h3 className="author-company">{reviewArea.from}</h3>
                  {ReactHtmlParser(reviewArea.content)}
                </div>
              </div>
            </div>
          </div>
          <button className="scroll-down-btn">
            <ScrollDown />
          </button>
        </div>
      </div>
    </section>
  )
}
