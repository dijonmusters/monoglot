import React from 'react'
import styled from 'styled-components'
import { Twitter, GitHub, Linkedin } from 'react-feather'
import Link from './styled/Link'

const StickyFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;
  border-top: 1px solid ${({ theme }) => theme.separator};
`

const Icons = styled.div`
  margin-top: 1rem;
  & svg {
    margin-left: 0.25rem;
    margin-right: 0.25rem;
  }
`

const Footer = () => {
  return (
    <StickyFooter>
      <p>Written by Jon Meyers</p>
      <Icons>
        <Link href="https://github.com/dijonmusters/" target="_blank">
          <GitHub />
        </Link>
        <Link href="https://twitter.com/_dijonmusters" target="_blank">
          <Twitter />
        </Link>
        <Link href="https://www.linkedin.com/in/jon-meyers/" target="_blank">
          <Linkedin />
        </Link>
      </Icons>
    </StickyFooter>
  )
}

export default Footer
