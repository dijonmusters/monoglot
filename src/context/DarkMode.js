import React, { createContext, useState, useEffect } from 'react'

const Context = createContext()

const DarkModeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light')

  const setMode = mode => {
    localStorage.setItem('theme', mode)
    setTheme(mode)
  }

  const isDarkTheme = () => theme === 'dark'

  const toggle = () => setMode(isDarkTheme() ? 'light' : 'dark')

  useEffect(() => {
    const localTheme = localStorage.getItem('theme')
    matchMedia &&
    matchMedia('(prefers-color-scheme: dark)').matches &&
    !localTheme
      ? setMode('dark')
      : localTheme
      ? setTheme(localTheme)
      : setMode('light')
  }, [])

  const exposed = {
    theme,
    toggle,
    isDarkTheme,
  }

  return <Context.Provider value={exposed}>{children}</Context.Provider>
}

export { DarkModeProvider as default, Context }
