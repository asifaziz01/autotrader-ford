import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import Header from './header'
import PreloadIcon from './icons/preload'

const Layout = ({ preload, preloadSrc, children }) => {
  const data = useStaticQuery(graphql`
      query SiteTitleHomeQuery {
        site {
          siteMetadata {
            title
          }
        }
        poster: file(relativePath: { eq: "poster.png" }) {
          childImageSharp {
            fixed(width: 5, height: 5) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `),
    posterSrc = data.poster.childImageSharp.fixed.src,
    [preloadMedia, setPreloadMedia] = useState(null),
    [isPlaying, setPlaying] = useState(true),
    [isPlayed, setPlayed] = useState(false)
  preloadMedia !== null &&
    preloadMedia.addEventListener('play', e => {
      setPlayed(false)
      setPlaying(true)
    })
  preloadMedia !== null &&
    preloadMedia.addEventListener('ended', e => {
      setPlaying(false)
      setPlayed(true)
    })

  useEffect(() => {
    setPreloadMedia(document.getElementById('preload-media'))
  }, [])
  console.log(isPlaying, isPlayed)
  return (
    <>
      {preload && !isPlayed && (
        <div
          className={`preload-wrap ${
            isPlaying ? 'playing' : isPlayed ? 'played' : ``
          }`}
        >
          <div className="preload-container">
            <div className={`preload-icon ${isPlaying ? 'play' : ``}`}>
              <PreloadIcon />
            </div>
            <video
              className="preload-video"
              id="preload-media"
              poster={posterSrc}
              autoPlay={true}
              controls={false}
              muted={true}
            >
              <source src={preloadSrc} type="video/mp4" />
            </video>
            <div className="preload-progress"></div>
          </div>
        </div>
      )}
      <Header
        loading={isPlaying}
        loaded={isPlayed}
        siteTitle={data.site.siteMetadata?.title || `Title`}
      />
      <main className={isPlaying ? 'loading' : isPlayed ? 'loaded' : ``}>
        {children}
      </main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
