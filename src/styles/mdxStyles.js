import React from 'react'
import styled from 'styled-components'
import Blockquote from '../components/styled/Blockquote'
import Code from '../components/Code'

const P = styled.p`
  margin: 1rem 0;
`

const H1 = styled.h1`
  margin-top: 2rem;
  margin-bottom: 2rem;
`

const H2 = styled.h2`
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`

const H3 = styled.h3`
  margin-top: 1rem;
  margin-bottom: 1rem;
`

const InlineCode = styled.span`
  padding: 0 0.5rem;
  background-color: ${({ theme }) => theme.backgroundColorLight};
  color: ${({ theme }) => theme.textLighter};
  border-radius: 4px;
`

const components = {
  p: props => <P {...props} />,
  h1: props => <H1 {...props} />,
  h2: props => <H2 {...props} />,
  h3: props => <H3 {...props} />,
  blockquote: props => <Blockquote {...props} />,
  pre: props => <Code {...props} />,
  inlineCode: props => <InlineCode {...props} />,
}

export { components }
