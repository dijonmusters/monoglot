import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from "gatsby-plugin-mdx"

const Article = ({ data: { mdx: {
    frontmatter: { title, date },
    body,
  }}}) => {
  return (
    <>
      <h1>{title}</h1>
      <p>{date}</p>
      <MDXRenderer>{body}</MDXRenderer>
    </>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    mdx(frontmatter: { slug: { eq: $path }}) {
      body
      frontmatter {
        date
        title
      }
    }
  }
`

export default Article
