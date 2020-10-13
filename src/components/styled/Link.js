import styled from 'styled-components'
import { Link } from 'gatsby'

const ClientLink = styled(Link)`
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

export default ClientLink
