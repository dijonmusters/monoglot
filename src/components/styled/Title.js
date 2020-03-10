import styled from 'styled-components'

const Title = styled.h2`
  color: ${props => (props.highlight ? props.theme.highlightColor : 'inherit')};
  font-weight: 600;
  white-space: ${props => (props.noWrap ? 'nowrap' : 'wrap')};
  overflow: ${props => (props.noWrap ? 'hidden' : 'auto')};
  text-overflow: ${props => (props.noWrap ? 'ellipsis' : 'auto')};
  line-height: 1.5;
  margin-top: ${props => (props.naked ? '0' : '2rem')};
  margin-bottom: ${props => (props.naked ? '0' : '2rem')};

  @media ${({ theme }) => theme.isLargeScreen} {
    line-height: 1.5;
  }
`

export default Title
