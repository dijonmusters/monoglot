import styled from 'styled-components'

const Link = styled.a`
  &:visited,
  &:hover,
  &:active {
    color: ${props =>
      props.highlight ? props.theme.highlightColor : 'inherit'};
    text-decoration: none;
    font-weight: inherit;
    font-family: inherit;
  }
`

export default Link
