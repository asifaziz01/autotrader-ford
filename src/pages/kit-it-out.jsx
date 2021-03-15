
import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import FordEscape from '../components/constants/ford-escape'

import Hero from '../components/sections/kit-it-out/hero'
import Section2 from '../components/sections/kit-it-out/section-2'

const KitItOut = () => {
  const pageData = FordEscape(),
    { seo, sections } = pageData
  return (
    <Layout>
      <SEO title={seo.title} description={seo.description} />
      <Hero data={sections.hero} />
      <Section2 data={sections.section2} />
    </Layout>
  )
}

export default KitItOut