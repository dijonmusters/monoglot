import React from 'react'
import { Helmet } from 'react-helmet'
import useDarkMode from '../hooks/useDarkMode'

const Favicon = () => {
  const { theme } = useDarkMode()
  const isDark = theme === 'dark'
  const favicon = `/favicon-${isDark ? 'dark' : 'light'}.ico`

  return (
    <Helmet>
      <link rel="icon" type="image/x-icon" href={favicon} />
    </Helmet>
  )
}

export default Favicon
