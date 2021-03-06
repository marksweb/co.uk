import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import PostsList from '../components/posts'
import SEO from '../components/seo'

const TagPageTemplate = ({ data, pageContext }) => {
  const posts = data.allMarkdownRemark.edges.map((edge) => edge.node)
  const title = `Tag "${pageContext.tag}"`

  return (
    <Layout title={title}>
      <SEO
        title={title}
        description={`List of all posts tagged as "${pageContext.tag}"`}
      />
      <section>
        <h1>{`Posts tagged as "${pageContext.tag}"`}</h1>

        <PostsList posts={posts} />
      </section>
    </Layout>
  )
}

export default TagPageTemplate

export const pageQuery = graphql`
  query TagBySlug($tag: String!) {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { tags: { eq: $tag } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          ...PostPreview
        }
      }
    }
  }
`
