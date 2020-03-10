import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import styled from 'styled-components'
import { format } from 'date-fns'
import Title from '../components/styled/Title'
import NextPrev from '../components/NextPrev'

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
  pageContext: { previous, next },
}) => {
  const formattedDate = format(new Date(date), 'do MMM yyyy')

  return (
    <>
      <Title naked>{title}</Title>
      <StyledDate>{formattedDate}</StyledDate>
      <MDXRenderer>{body}</MDXRenderer>
      <NextPrev next={next} previous={previous} />
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
