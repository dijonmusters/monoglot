import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import styled from 'styled-components'
import { format } from 'date-fns'

const StyledDate = styled.p`
  font-size: 0.75rem;
  opacity: 0.7;
`

const Article = ({
  data: {
    mdx: {
      frontmatter: { title, date },
      body,
    },
  },
}) => {
  const formattedDate = format(new Date(date), 'do MMM yyyy')
  return (
    <>
      <h1>{title}</h1>
      <StyledDate>{formattedDate}</StyledDate>
      <MDXRenderer>{body}</MDXRenderer>
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
