import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Slider from '../components/slider'

import preloadVideo from '../videos/preload.mp4'

const IndexPage = () => {
  return (
    <Layout preload={true} preloadSrc={preloadVideo}>
      <SEO title="Home" />
      <Slider />
    </Layout>
  )
}

export default IndexPage
