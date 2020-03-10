import styled from 'styled-components'

const Blockquote = styled.blockquote`
  margin: 2rem 0;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.backgroundColorLight};
  border-left: 5px solid ${({ theme }) => theme.highlightColor};
  color: ${({ theme }) => theme.textLight};
  font-style: italic;
`

export default Blockquote
