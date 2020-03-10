import React from 'react'
import styled from 'styled-components'
import { ChevronLeft, ChevronRight } from 'react-feather'
import Link from '../components/styled/Link'

const NavigationPanel = styled.div`
  border-top: 1px solid ${({ theme }) => theme.separator};
  display: flex;
`

const NavLink = styled(Link)`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: ${props => props.alignment};
  overflow: hidden;
  white-space: nowrap;
  margin-top: 2rem;
  margin-right: 1rem;
  line-height: 1.5;

  &:last-child {
    margin-right: 0;
  }

  & > svg {
    flex-shrink: 0;
  }
`

const Title = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
`

const NextPrev = ({ next, previous }) => (
  <NavigationPanel>
    {previous && (
      <NavLink href={previous.fields.slug}>
        <ChevronLeft />
        <Title>{previous.frontmatter.title}</Title>
      </NavLink>
    )}
    {next && (
      <NavLink href={next.fields.slug} alignment="end" right>
        <Title>{next.frontmatter.title}</Title>
        <ChevronRight />
      </NavLink>
    )}
  </NavigationPanel>
)

export default NextPrev
