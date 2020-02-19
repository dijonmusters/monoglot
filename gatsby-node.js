const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

const ALL_ARTICLES = `{
  allMdx {
    edges {
      node {
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

  data.allMdx.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: Article,
      context: {},
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
    const value = `/blog${createFilePath({ node, getNode })}`
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
