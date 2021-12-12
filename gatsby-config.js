const gitalkOpt = require('./gitalk.json');
module.exports = {
  siteMetadata: {
    siteUrl: "https://suziwen.github.io/my-gatsby-gitalk-demo/",
    title: "My Gatsby Gitalk Demo",
  },
  pathPrefix: '/my-gatsby-gitalk-demo',
  plugins: [
    "gatsby-plugin-image",
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-plugin-gitalk",
      options: {
        config: gitalkOpt,
      },
    },
  ],
};
