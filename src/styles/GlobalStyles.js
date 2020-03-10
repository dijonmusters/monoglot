import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  ${({ theme }) => css`
    html {
      box-sizing: border-box;
      font-size: 16px;
    }

    *,
    *::before,
    *::after {
      box-sizing: inherit;
    }

    body {
      background-color: ${theme.backgroundColor};
      font-family: 'Open Sans', sans-serif;
    }

    a {
      text-decoration: none;
      cursor: pointer;

      :hover {
        text-decoration: underline;
      }
    }

    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin: 0;
      padding: 0;
    }
  `}

`

export default GlobalStyles
