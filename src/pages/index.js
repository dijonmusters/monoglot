import React from 'react'
import { graphql } from 'gatsby'

const renderArticle = ({
  id,
  frontmatter: { title, date, slug, tags },
  excerpt,
}) => {
  return (
    <div key={id}>
      <h2>{title}</h2>
      <p>{excerpt}</p>
    </div>
  )
}

const Index = ({
  data: {
    allMdx: { edges },
  },
}) => {
  const articles = edges.map(a => a.node)
  console.log(articles)
  return articles.map(renderArticle)
}

export const query = graphql`
  query AllArticles {
    allMdx {
      edges {
        node {
          frontmatter {
            title
            date
            slug
            tags
          }
          timeToRead
          excerpt
        }
      }
    }
  }
`

export default Index
