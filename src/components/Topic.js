import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const ALL_DOC_NAMES = graphql`
  query AllDocNames {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            tags
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

const Topic = ({ tag }) => {
  const data = useStaticQuery(ALL_DOC_NAMES)
  const docs = data.allMdx.edges
    .map(d => d.node)
    .filter(({ frontmatter: { tags } }) => tags && tags.includes(tag))
  return docs.map(d => (
    <p key={d.id}>
      <a href={d.fields.slug}>{d.frontmatter.title}</a>
    </p>
  ))
}

export default Topic
