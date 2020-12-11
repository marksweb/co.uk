import React from 'react'
import styled from 'styled-components'

const ListInlineStyle = styled.ul`
  list-style: none;
  margin: 0 0 30px 0;
`

const ListItemStyle = styled.li`
  margin-bottom: 0;
  display: inline-block;
  padding: 0
    ${(props) =>
      props.padding !== null ? props.padding : props.theme.spacings[1]};
`

const ListInline = ({ children, padding = null }) => {
  return (
    <ListInlineStyle>
      {React.Children.map(children, (child, i) => (
        <ListItemStyle key={i} padding={padding}>
          {child}
        </ListItemStyle>
      ))}
    </ListInlineStyle>
  )
}

export default ListInline
