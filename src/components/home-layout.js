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
      }
    `),
    [preloadMedia, setPreloadMedia] = useState(null),
    [isPlaying, setPlaying] = useState(false),
    [isPlayed, setPlayed] = useState(false)

  typeof window !== 'undefined' &&
    window.addEventListener('beforeunload', event => {
      setPlaying(false)
      setPlayed(false)
      return ''
    })
  preloadMedia !== null &&
    preloadMedia.addEventListener('play', e => {
      setPlaying(true)
    })
  preloadMedia !== null &&
    preloadMedia.addEventListener('canplay', e => {
      setTimeout(() => {
        setPlaying(false)
        setPlayed(true)
      }, preloadMedia.duration * 1000)
    })
  useEffect(() => {
    setPreloadMedia(document.getElementById('preload-media'))
  }, [setPlaying, setPlayed])
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
