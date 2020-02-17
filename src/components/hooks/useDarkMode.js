import { useContext } from 'react'
import { Context as darkModeContext } from '../../context/DarkMode'

const useDarkMode = () => {
  const { theme, toggle, isDarkTheme } = useContext(darkModeContext)

  return {
    theme,
    toggle,
    isDarkTheme,
  }
}

export default useDarkMode
