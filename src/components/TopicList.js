import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const ALL_TOPICS = graphql`
  query AllFields {
    allMdx {
      distinct(field: frontmatter___tags)
    }
  }
`

const TopicList = () => {
  const data = useStaticQuery(ALL_TOPICS)
  const topics = data.allMdx.distinct

  return topics.map(t => (
    <p key={t}>
      <a href={`/topics/${t}`}>#{t}</a>
    </p>
  ))
}

export default TopicList
