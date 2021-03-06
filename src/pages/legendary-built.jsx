import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import FordMustang from '../components/constants/ford-mustang'

import Hero from '../components/sections/legendary-built/hero'
import Section2 from '../components/sections/legendary-built/section-2'
import Section3 from '../components/sections/legendary-built/section-3'

export default () => {
  const pageData = FordMustang(),
    { seo, sections } = pageData

  return (
    <Layout>
      <SEO title={seo.title} description={seo.description} />
      <Hero data={sections.hero} />
      <Section2 data={sections.section2} />
      <Section3 data={sections.section3} />
    </Layout>
  )
}
