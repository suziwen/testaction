require("dotenv").config()
const {GitalkPluginHelper} = require('gatsby-plugin-gitalk')

const gitalkOpt = require('./gitalk.json')

exports.createPages = async ({ graphql, actions, getNode, reporter }) => {
  const site = getNode('Site')
  const {siteMetadata: {siteUrl}} = site
  const gitalkCreateIssueToken = process.env.GITALK_CREATE_ISSUE_TOKEN
  if (gitalkCreateIssueToken) {
    const issueOptions = Object.assign({}, gitalkOpt, {
      id: 'demo',
      title: 'demo',
      description: 'my-gatsby-gitalk-demo',
      url: siteUrl,
    }, {
      personalToken: gitalkCreateIssueToken
    })
    await GitalkPluginHelper.createIssue(issueOptions)
    reporter.info(`create issue: demo`)
  }
}
