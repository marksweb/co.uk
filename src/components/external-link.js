import React from 'react'
import PropTypes from 'prop-types'

const ExternalLink = ({ children, to, title }) => (
  <a
    href={to}
    title={title}
    aria-label={title}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
)

ExternalLink.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default ExternalLink
