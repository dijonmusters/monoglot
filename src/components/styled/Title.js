import styled from 'styled-components'

const Title = styled.h2`
  font-weight: 600;
  color: ${({ theme }) => theme.highlightColor};
  white-space: ${props => (props.noWrap ? 'nowrap' : 'wrap')};
  overflow: ${props => (props.noWrap ? 'hidden' : 'auto')};
  text-overflow: ${props => (props.noWrap ? 'ellipsis' : 'auto')};
`

export default Title
