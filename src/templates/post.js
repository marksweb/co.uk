import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import ListInline from '../components/list-inline'
import ExternalLink from '../components/external-link'
import Layout from '../components/layout'
import Pagination from '../components/pagination'
import SEO from '../components/seo'
import Sharing from '../components/sharing'
import Tag from '../components/tag'
import { makeTagUrl } from '../utils/routes'
import { FaGithub } from 'react-icons/fa'

const PostMetaData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  @media (min-width: 400px) {
    flex-direction: row;
  }

  div {
    margin-bottom: 0.5rem;
  }
`

const PostTemplate = ({ location, data, pageContext }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const headerImage = post.frontmatter.header_image
  // const ogImage = post.frontmatter.og_image
  const headerOgImage = post.frontmatter.headerOgImage
  const { previous, next } = pageContext
  const editURL = `https://github.com/marksweb/co.uk/blob/master/src/${
    post.fileAbsolutePath.split('/src/')[1]
  }`

  return (
    <Layout title={siteTitle} headerImage={headerImage}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        image={headerOgImage && headerOgImage.childImageSharp.fixed.src}
      />
      <h1>{post.frontmatter.title}</h1>

      <PostMetaData>
        <div>
          {post.frontmatter.date} • {post.timeToRead} min read
        </div>
        <div>
          <ExternalLink to={editURL} title="Edit on Github">
            <FaGithub />
            {` `}Edit on Github
          </ExternalLink>
        </div>
      </PostMetaData>

      <div dangerouslySetInnerHTML={{ __html: post.html }} />

      <ListInline padding="0">
        {post.frontmatter.tags.map((tag, index) => (
          <Tag to={makeTagUrl(tag)} key={index}>
            {tag}
          </Tag>
        ))}
      </ListInline>

      <Sharing post={post} path={location.pathname} />
      <Pagination previous={previous} next={next} />
    </Layout>
  )
}

export default PostTemplate

export const pageQuery = graphql`
  query PostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        description
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      timeToRead
      fileAbsolutePath
      frontmatter {
        title
        ...FormattedDate
        description
        tags
        header_image {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        headerOgImage: header_image {
          childImageSharp {
            fixed(fit: COVER, width: 1200, height: 600, cropFocus: CENTER) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`
