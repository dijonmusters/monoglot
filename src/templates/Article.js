import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import styled from 'styled-components'
import { format } from 'date-fns'
import { ChevronLeft, ChevronRight } from 'react-feather'
import Link from '../components/styled/Link'

const StyledDate = styled.p`
  font-size: 0.75rem;
  opacity: 0.7;
`

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

const Article = ({
  data: {
    mdx: {
      frontmatter: { title, date },
      body,
    },
  },
  pageContext: { previous, next },
}) => {
  console.log(previous, next)
  const formattedDate = format(new Date(date), 'do MMM yyyy')
  return (
    <>
      <h1>{title}</h1>
      <StyledDate>{formattedDate}</StyledDate>
      <MDXRenderer>{body}</MDXRenderer>
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
    </>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    mdx(fields: { slug: { eq: $path } }) {
      body
      frontmatter {
        date
        title
      }
    }
  }
`

export default Article
