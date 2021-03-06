import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { useIsMounted, useRefresh } from 'react-tidy'

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
    refresh = useRefresh(),
    isMounted = useIsMounted(),
    posterSrc = data.poster.childImageSharp.fixed.src,
    [isPlaying, setPlaying] = useState(false),
    [isPlayed, setPlayed] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('beforeunload', event => {
        return refresh()
      })
    }
    const preloadMedia = document.getElementById('preload-media')
    if (preloadMedia !== null && isMounted()) {
      preloadMedia.addEventListener('play', e => {
        setPlaying(true)
      })
      preloadMedia.addEventListener('ended', e => {
        setPlaying(false)
        setPlayed(true)
      })
    }
  }, [refresh, isMounted, setPlaying, setPlayed])
  return (
    <>
      {preload && !isPlayed && (
        <div
          className={`preload-wrap ${
            isPlaying ? 'playing' : isPlayed ? 'played' : ``
          }`}
        >
          <div className="preload-container">
            <div
              className={`preload-icon ${
                isPlaying ? 'play' : isPlayed ? 'played' : ``
              }`}
            >
              <PreloadIcon />
            </div>
            <video
              className="preload-video"
              id="preload-media"
              poster={posterSrc}
              controls={false}
              muted={true}
              autoPlay={true}
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
