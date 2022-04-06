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
          Hi! I'm a web developer. I work mostly with Python & Django, on AWS.
          I'm the tech lead of the <ExternalLink to="https://www.django-cms.org/en/about-us/" title="django CMS association">django CMS association</ExternalLink>.
          I also maintain a number of packages. You can find me at
          <ExternalLink to="https://github.com/marksweb" title="github profile">
            github.com/marksweb
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
