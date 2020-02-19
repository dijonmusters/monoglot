import React from 'react'
import styled from 'styled-components'
import DarkModeSwitcher from './DarkModeSwitcher'
import Link from './styled/Link'

const Navigation = styled.nav`
  padding: 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.separator};
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Small = styled.span`
  font-size: 1rem;
  font-weight: 400;
  opacity: 0.7;
`

const Nav = () => {
  return (
    <Navigation>
      <div>
        <Link href="/">
          <h1>
            Monoglot <Small>A JavaScript blog</Small>
          </h1>
        </Link>
      </div>
      <div>
        <DarkModeSwitcher />
      </div>
    </Navigation>
  )
}

export default Nav
