import Img from 'gatsby-image'
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const AvatarStyles = styled.div`
  padding: 1rem;

  img {
    border-radius: 10%;
  }
`

const Avatar = ({ sharpImage }) => (
  <AvatarStyles>
    <Img fixed={sharpImage.fixed} />
  </AvatarStyles>
)

Avatar.defaultProps = {
  centered: false,
}

Avatar.propTypes = {
  sharpImage: PropTypes.object.isRequired,
}

export default Avatar
