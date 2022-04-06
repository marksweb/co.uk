import { graphql } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

import Avatar from '../components/avatar'
import ExternalLink from '../components/external-link'
import Layout from '../components/layout'
import SEO from '../components/seo'
import SocialLinks from '../components/social'

const HeroSectionStyles = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const BioStyles = styled.p`
  text-align: center;
  max-width: 400px;
`

const AboutPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="About Mark Walker" />
      <HeroSectionStyles>
        <h1>Mark Walker</h1>
        <Avatar sharpImage={data.avatarImage.childImageSharp} />
        <BioStyles>
          Hi! I'm a web developer. I work mostly with Python & Django, on AWS. I 
          also have a keen interest in OSS and helping other developers through StackOverflow.
          I'm the tech lead of the <ExternalLink to="https://www.django-cms.org/en/about-us/" title="django CMS association">django CMS association</ExternalLink>.
          I also maintainer of &nbsp;
          <ExternalLink to="https://github.com/marksweb/django-bleach" title="django-bleach">
            django-bleach
          </ExternalLink>
          &nbsp; and &nbsp;
          <ExternalLink to="https://github.com/groveco/django-sql-explorer" title="django-sql-explorer">
            django-sql-explorer
          </ExternalLink>
          &nbsp;
          If you've got a python/django package you'd like help maintaining, get in touch.
        </BioStyles>
        <SocialLinks />
      </HeroSectionStyles>
    </Layout>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    avatarImage: file(relativePath: { eq: "avatar.jpg" }) {
      childImageSharp {
        fixed(width: 160) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
