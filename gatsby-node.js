const path = require(`path`)

const ALL_ARTICLES = `{
  allMdx {
    edges {
      node {
        frontmatter {
          slug
        }
      }
    }
  }
}`

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const Article = path.resolve(
    `src/templates/Article.js`
  )

  const { errors, data } = await graphql(ALL_ARTICLES)

  if (errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  data.allMdx.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
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
