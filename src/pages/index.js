import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import PostsList from '../components/posts'
import SEO from '../components/seo'
import SocialLinks from '../components/social'

const HeroSectionStyles = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges.map((edge) => edge.node)
  return (
    <Layout>
      <SEO title="Home" />
      <HeroSectionStyles>
        <SocialLinks />
        <h1>Ramblings</h1>
      </HeroSectionStyles>
      <section>
        <PostsList posts={posts} />
      </section>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 10
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          ...PostPreview
        }
      }
    }
  }
`
