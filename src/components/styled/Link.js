import styled from 'styled-components'

const Link = styled.a`
  color: ${props => (props.highlight ? props.theme.highlightColor : 'inherit')};
  text-decoration: none;

  &:visited,
  &:hover,
  &:active {
    font-weight: inherit;
    font-family: inherit;
    color: inherit;
    text-decoration: none;
  }
`

export default Link
