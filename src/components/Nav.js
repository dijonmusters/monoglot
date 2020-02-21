import React from 'react'
import styled from 'styled-components'
import DarkModeSwitcher from './DarkModeSwitcher'
import Link from './styled/Link'

const Navigation = styled.nav`
  padding: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.separator};
  color: ${({ theme }) => theme.text};
  display: block;
  text-align: center;

  @media ${({ theme }) => theme.isLargeScreen} {
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: left;
  }
`

const Title = styled.span`
  margin-right: 0.5rem;
  color: ${({ theme }) => theme.highlightColor};
`

const Small = styled.span`
  display: block;
  font-size: 1rem;
  font-weight: 400;
  opacity: 0.7;

  @media ${({ theme }) => theme.isLargeScreen} {
    display: inline;
  }
`

const Nav = () => {
  return (
    <Navigation>
      <div>
        <h1>
          <Link href="/">
            <Title>Monoglot</Title>
          </Link>
          <Small>A JavaScript blog</Small>
        </h1>
      </div>
      <DarkModeSwitcher />
    </Navigation>
  )
}

export default Nav
