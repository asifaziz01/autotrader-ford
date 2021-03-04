import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import FordMustang from '../components/constants/ford-mustang'

import Hero from './sections/legendary-built/hero'

export default () => {
  const pageData = FordMustang(),
    { seo, sections } = pageData
  return (
    <Layout>
      <SEO title={seo.title} description={seo.description} />
      <Hero data={sections.hero} />
    </Layout>
  )
}
