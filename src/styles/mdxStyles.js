import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import Highlight, { defaultProps } from 'prism-react-renderer'
import nightOwl from 'prism-react-renderer/themes/nightOwl'
import lightTheme from 'prism-react-renderer/themes/github'
import { Copy } from 'react-feather'
import { copyToClipboard } from '../utils/copyToClipboard'

const getTheme = theme => {
  console.log(nightOwl)
  return theme.isDarkMode
    ? {
        ...nightOwl,
        plain: {
          backgroundColor: theme.backgroundColorLight,
          color: nightOwl.plain.color,
        },
      }
    : lightTheme
}

const CopyCode = styled.button`
  display: flex;
  position: absolute;
  right: 0.25rem;
  top: 0.25rem;
  border: 0;
  border-radius: 3px;
  color: ${({ theme }) => theme.textLight};
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.backgroundColor};

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.text};
  }
`

const CopyIcon = styled(Copy)`
  height: 1rem;
  width: 1rem;
`

const P = styled.p`
  margin: 1rem 0;
`

const H1 = styled.h1``

const H2 = styled.h2``

const H3 = styled.h3``

const Blockquote = styled.blockquote`
  margin: 2rem 0;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.backgroundColorLight};
  border-left: 5px solid ${({ theme }) => theme.highlightColor};
  color: ${({ theme }) => theme.textLight};
  font-style: italic;
`

const Pre = styled.pre`
  position: relative;
  padding: 1rem;
  margin-bottom: 2rem;
  font-size: 85%;
  text-align: left;
  border-radius: 4px;
  line-height: 1.5;
  background-color: ${({ theme }) => theme.backgroundColorLight};
  color: ${({ theme }) => theme.textLighter};

  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`

const InlineCode = styled.span`
  padding: 0 0.5rem;
  background-color: ${({ theme }) => theme.backgroundColorLight};
  color: ${({ theme }) => theme.textLighter};
  border-radius: 4px;
`

export const LineNo = styled.span`
  display: inline-block;
  width: 2em;
  user-select: none;
  opacity: 0.3;
`

const Code = ({ codeString, language, ...props }) => {
  const handleClick = () => {
    copyToClipboard(codeString)
  }

  const themeContext = useContext(ThemeContext)

  return (
    <Highlight
      {...defaultProps}
      code={codeString}
      language={language}
      theme={getTheme(themeContext)}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Pre className={className} style={style}>
          <CopyCode onClick={handleClick}>
            <CopyIcon />
          </CopyCode>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              <LineNo>{i + 1}</LineNo>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </Pre>
      )}
    </Highlight>
  )
}

const components = {
  p: props => <P {...props} />,
  h1: props => <H1 {...props} />,
  h2: props => <H2 {...props} />,
  h3: props => <H3 {...props} />,
  blockquote: props => <Blockquote {...props} />,
  pre: ({ children: { props } }) => {
    if (props.mdxType === 'code') {
      return (
        <Code
          codeString={props.children.trim()}
          language={props.className && props.className.replace('language-', '')}
          {...props}
        />
      )
    }
  },
  inlineCode: props => <InlineCode {...props} />,
}

export { components }
