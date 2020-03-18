const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

const ALL_ARTICLES = `{
  allMdx(sort: { fields: frontmatter___date, order: DESC }) {
    edges {
      node {
        frontmatter {
          title
        }
        fields {
          slug
        }
      }
    }
  }
}`

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const Article = path.resolve(`src/templates/Article.js`)

  const { errors, data } = await graphql(ALL_ARTICLES)

  if (errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const articles = data.allMdx.edges.map(({ node }) => node)

  articles.forEach((article, index) => {
    const previous = index === articles.length - 1 ? null : articles[index + 1]
    const next = index === 0 ? null : articles[index - 1]

    createPage({
      path: article.fields.slug,
      component: Article,
      context: { previous, next },
    })
  })

  createPage({
    matchPath: '/topics/:tag',
    path: '/topics/:tag',
    component: path.resolve('./src/components/Topic.js'),
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
    const value = `/articles${createFilePath({ node, getNode })}`
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
