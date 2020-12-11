const slugify = require('slugify')

exports.makePostUrl = (slug) => {
  // Remove the date prefix from the slug
  const matches = slug.match(/\/\d{4}-\d{2}-\d{2}-(.*)\//)
  const dateLessSlug = matches[1]
  return `/${dateLessSlug}/`
}

exports.makeTagUrl = (tagName) => `/tags/${slugify(tagName)}`
