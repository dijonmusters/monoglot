module.exports = {
  siteMetadata: {
    siteUrl: `https://monoglot.dev`,
    title: 'Monoglot',
    description: 'A JavaScript blog',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `articles`,
        path: `${__dirname}/src/articles/`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-mdx`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-layout`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Open Sans`,
            variants: [`300`, `400`, `500`, `600`, `700`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-feed-mdx`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map(({ node: article }) => {
                const { siteUrl } = site.siteMetadata
                const { html } = article

                const fixedHtml = html
                  .replace(/href="\//g, `href="${siteUrl}/`)
                  .replace(/src="\//g, `src="${siteUrl}/`)
                  .replace(/"\/static\//g, `"${siteUrl}/static/`)
                  .replace(/,\s*\/static\//g, `,${siteUrl}/static/`)
                  .replace(/static\//g, `${siteUrl}/static/`)
                  .replace(/,\s*static\//g, `,${siteUrl}/static/`)

                return Object.assign({}, article.frontmatter, {
                  description: article.excerpt,
                  date: article.frontmatter.date,
                  url: `${site.siteMetadata.siteUrl}${article.fields.slug}`,
                  guid: `${site.siteMetadata.siteUrl}${article.fields.slug}`,
                  custom_elements: [
                    { 'content:encoded': fixedHtml },
                    { category: article.frontmatter.tags.join(',') },
                  ],
                })
              })
            },
            query: `
              {
                allMdx(sort: { fields: frontmatter___date, order: DESC }) {
                  edges {
                    node {
                      frontmatter {
                        title
                        date
                        tags
                      }
                      fields {
                        slug
                      }
                      html
                      excerpt
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: 'Monoglot',
          },
        ],
      },
    },
  ],
}
