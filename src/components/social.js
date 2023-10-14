import { FaGithub, FaMastodon, FaStackOverflow, FaTwitter } from 'react-icons/fa'
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import ListInline from './list-inline'
import ExternalLink from './external-link'

const SocialLinks = () => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          social {
            github
            mastodon
            stackoverflow
            twitter
          }
        }
      }
    }
  `)

  const { github, mastodon, twitter, stackoverflow } = site.siteMetadata.social

  return (
    <ListInline>
      <a
        href={`https://fosstodon.org/${mastodon}`}
        title="Mastodon profile"
        aria-label="Mastodon profile"
        target="_blank"
        rel="me"
      >
        <FaMastodon title="Mastodon profile" />
      </a>
      <ExternalLink
        to={`https://www.twitter.com/${twitter}`}
        title="Twitter profile"
      >
        <FaTwitter title="Twitter profile" />
      </ExternalLink>
      <ExternalLink
        to={`https://stackoverflow.com/users/${stackoverflow}`}
        title="Stackoverflow profile"
      >
        <FaStackOverflow title="Stackoverflow profile" />
      </ExternalLink>
      <ExternalLink to={`https://github.com/${github}`} title="Github profile">
        <FaGithub title="Github Profile" />
      </ExternalLink>
    </ListInline>
  )
}

export default SocialLinks
