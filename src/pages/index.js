import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
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
  flex-shrink: 0;
  font-size: 0.75rem;
  opacity: 0.7;
  padding-bottom: 0;

  @media ${({ theme }) => theme.isLargeScreen} {
    margin-left: 0.25rem;
    margin-bottom: 0.125rem;
    padding-bottom: 0.25rem;
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
          <Title noWrap naked highlight>
            {title}
          </Title>
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
}) => {
  const now = new Date()
  const releasedArticles = edges
    .map(a => a.node)
    .filter(a => {
      const releaseDate = new Date(a.frontmatter.date)
      return releaseDate <= now
    })
  return (
    <div>
      <Helmet>
        <title>Monoglot - Blog list</title>
      </Helmet>
      {releasedArticles.map(renderArticle)}
    </div>
  )
}

export const query = graphql`
  query AllArticles {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          id
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
