import React, { useContext } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './themeSettings'
import { Context as darkModeContext } from '../context/DarkMode'

const App = ({ children }) => {
  const { theme: currentTheme } = useContext(darkModeContext)
  const theme = currentTheme === 'dark' ? darkTheme : lightTheme

  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
}

export default App
