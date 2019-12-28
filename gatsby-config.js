require("dotenv").config();
const config = require("./content/meta/config");

const query = `{
  allMarkdownRemark( filter: { fields: { slug: { ne: null } } }) {
    edges {
      node {
        objectID: fileAbsolutePath
        fields {
          slug
        }
        internal {
          content
        }
        frontmatter {
          title
        }
      }
    }
  }
}`;

const queries = [
  {
    query
  }
];

module.exports = {
  // pathPrefix: config.pathPrefix,
  siteMetadata: {
    title: config.siteTitle,
    description: config.siteDescription,
    siteUrl: config.siteUrl
  },
  plugins: [
    `gatsby-plugin-styled-jsx`, // the plugin's code is inserted directly to gatsby-node.js and gatsby-ssr.js files
    `gatsby-plugin-styled-jsx-postcss`, // as above
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/layouts/`)
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-plugin-sharp`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              backgroundColor: "transparent"
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 2em`
            }
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          {
            resolve: "gatsby-remark-emojis",
            options: {
              // Deactivate the plugin globally (default: true)
              active: true,
              // Add a custom css class
              class: "emoji-icon",
              // Select the size (available size: 16, 24, 32, 64)
              size: 64,
              // Add custom styles
              styles: {
                display: "inline",
                margin: "0",
                "margin-top": "1px",
                position: "relative",
                top: "5px",
                width: "25px"
              }
            }
          }
        ]
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.manifestName,
        short_name: config.manifestShortName,
        start_url: config.manifestStartUrl,
        background_color: config.manifestBackgroundColor,
        theme_color: config.manifestThemeColor,
        display: config.manifestDisplay,
        icons: [
          {
            src: "/icons/favicon-16x16.png",
            sizes: "16x16",
            type: "image/png"
          },
          {
            src: "/icons/favicon-32x32.png",
            sizes: "32x32",
            type: "image/png"
          },
          {
            src: "/icons/favicon-96x96.png",
            sizes: "96x96",
            type: "image/png"
          },
          {
            src: "/icons/apple-icon-114x114.png",
            sizes: "114x114",
            type: "image/png"
          },
          {
            src: "/icons/apple-icon-120x120.png",
            sizes: "120x120",
            type: "image/png"
          },
          {
            src: "/icons/apple-icon-144x144.png",
            sizes: "144x144",
            type: "image/png"
          },
          {
            src: "/icons/apple-icon-152x152.png",
            sizes: "152x152",
            type: "image/png"
          },
          {
            src: "/icons/apple-icon-180x180.png",
            sizes: "180x180",
            type: "image/png"
          },
          {
            src: "/icons/favicon-96x96.png",
            sizes: "144x144",
            type: "image/png"
          },
          {
            src: "/icons/android-icon-36x36.png",
            sizes: "36x36",
            type: "image/png"
          },
          {
            src: "/icons/android-icon-48x48.png",
            sizes: "48x48",
            type: "image/png"
          },
          {
            src: "/icons/android-icon-72x72.png",
            sizes: "72x72",
            type: "image/png"
          },
          {
            src: "/icons/android-icon-96x96.png",
            sizes: "96x96",
            type: "image/png"
          },
          {
            src: "/icons/android-icon-144x144.png",
            sizes: "144x144",
            type: "image/png"
          },
          {
            src: "/icons/android-icon-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/icons/ms-icon-310x310.png",
            sizes: "310x310",
            type: "image/png"
          },
        ]
      }
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID
      }
    },
    {
      resolve: `gatsby-plugin-feed`,
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
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.fields.prefix,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ "content:encoded": edge.node.html }]
                });
              });
            },
            query: `
            {
              allMarkdownRemark(
                limit: 1000,
                sort: { order: DESC}
              ) {
                edges {
                  node {
                    excerpt
                    html
                  }
                }
              }
            }
            `,
            output: "/rss.xml"
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        include: /svg-icons/
      }
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `GitHub`,
        fieldName: `github`,
        url: `https://api.github.com/graphql`,
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_API_KEY}`
        }
      }
    }
  ]
};
