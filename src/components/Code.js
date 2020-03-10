import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import Highlight, { defaultProps } from 'prism-react-renderer'
import nightOwl from 'prism-react-renderer/themes/nightOwl'
import lightTheme from 'prism-react-renderer/themes/github'
import CopyToClipboard from './CopyToClipboard'

const getTheme = theme =>
  theme.isDarkMode
    ? {
        ...nightOwl,
        plain: {
          backgroundColor: theme.backgroundColorLight,
          color: nightOwl.plain.color,
        },
      }
    : lightTheme

const LineNo = styled.span`
  display: inline-block;
  width: 2em;
  user-select: none;
  opacity: 0.3;
`

const StyledPre = styled.pre`
  position: relative;
  padding: 1rem;
  margin-bottom: 2rem;
  font-size: 85%;
  border-radius: 4px;
  overflow-y: scroll;
`

const Code = ({ children: { props } }) => {
  const code = props.children.trim()
  const language = props.className && props.className.replace('language-', '')
  const themeContext = useContext(ThemeContext)

  return (
    <Highlight
      {...defaultProps}
      code={code}
      language={language}
      theme={getTheme(themeContext)}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <StyledPre className={className} style={style}>
          <CopyToClipboard code={code} />
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              <LineNo>{i + 1}</LineNo>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </StyledPre>
      )}
    </Highlight>
  )
}

export default Code
