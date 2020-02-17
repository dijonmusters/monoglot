import React from 'react'
import styled from 'styled-components'
import DarkModeSwitcher from './DarkModeSwitcher'

const Navigation = styled.nav`
  padding: 2rem;
  border-bottom: 1px solid ${props => props.theme.separator};
  color: ${props => props.theme.text};
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const UnstyledLink = styled.a`
  &:visited,
  &:hover,
  &:active {
    font-style: inherit;
    color: inherit;
    background-color: transparent;
    font-size: inherit;
    text-decoration: none;
    font-variant: inherit;
    font-weight: inherit;
    line-height: inherit;
    font-family: inherit;
  }
`

const Link = styled(UnstyledLink)`
  font-size: 2rem;
  font-weight: 500;
  &:visited,
  &:hover,
  &:active {
    font-style: inherit;
    color: inherit;
    background-color: transparent;
    text-decoration: none;
    font-variant: inherit;
    font-weight: inherit;
    line-height: inherit;
    font-family: inherit;
  }
`

const Nav = () => {
  return (
    <Navigation>
      <div>
        <Link href="/">Monoglot</Link>
      </div>
      <div>
        <DarkModeSwitcher />
      </div>
    </Navigation>
  )
}

export default Nav
