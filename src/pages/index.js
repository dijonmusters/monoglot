import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { format } from 'date-fns'
import Title from '../components/styled/Title'
import Link from '../components/styled/Link'

const Article = styled.div`
  margin-bottom: 2rem;

  &:last-child {
    margin-bottom: 0;
  }
`

const SameLine = styled.div`
  display: block;

  @media ${({ theme }) => theme.isLargeScreen} {
    display: flex;
    align-items: flex-end;
  }
`

const StyledDate = styled.p`
  font-size: 0.75rem;
  opacity: 0.7;

  @media ${({ theme }) => theme.isLargeScreen} {
    margin-left: 0.25rem;
    margin-bottom: 0.125rem;
  }
`

const Excerpt = styled.p`
  margin-top: 0.25rem;
`

const renderArticle = ({
  id,
  frontmatter: { title, date, tags },
  fields: { slug },
  excerpt,
}) => {
  const formattedDate = format(new Date(date), 'do MMM yyyy')

  return (
    <Article key={id}>
      <Link href={slug}>
        <SameLine>
          <Title>{title}</Title>
          <StyledDate>{formattedDate}</StyledDate>
        </SameLine>
        <Excerpt>{excerpt}</Excerpt>
      </Link>
    </Article>
  )
}

const Index = ({
  data: {
    allMdx: { edges },
  },
}) => edges.map(a => a.node).map(renderArticle)

export const query = graphql`
  query AllArticles {
    allMdx {
      edges {
        node {
          frontmatter {
            title
            date
            tags
          }
          fields {
            slug
          }
          timeToRead
          excerpt
        }
      }
    }
  }
`

export default Index
