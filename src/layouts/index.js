import React from 'react'
import { Normalize } from 'styled-normalize'
import styled from 'styled-components'
import { MDXProvider } from '@mdx-js/react'
import GlobalStyles from '../styles/GlobalStyles'
import DarkModeProvider from '../context/DarkMode'
import ThemeProvider from '../styles/ThemeProvider'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { components } from '../styles/mdxStyles'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${props => props.theme.backgroundColour};
  color: ${props => props.theme.text};
  letter-spacing: 0.03rem;
`

const Main = styled.main`
  flex: 1;
  max-width: 768px;
  margin: 0 auto;
  padding: 2rem 0.25rem;

  @media ${({ theme }) => theme.isLargeScreen} {
    padding: 2rem;
  }
`

const Layout = ({ children }) => (
  <DarkModeProvider>
    <ThemeProvider>
      <MDXProvider components={components}>
        <Normalize />
        <GlobalStyles />
        <Container>
          <Nav />
          <Main>{children}</Main>
          <Footer />
        </Container>
      </MDXProvider>
    </ThemeProvider>
  </DarkModeProvider>
)

export default Layout
