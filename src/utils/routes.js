const slugify = require('slugify')

exports.makePostUrl = (slug) => {
  // Remove the date prefix from the slug
  const matches = slug.match(/\/\d{4}-\d{2}-\d{2}-(.*)\//)
  if (matches && matches[1]) {
    return `/${matches[1]}/`
  }
  return slug.startsWith('/') ? slug : `/${slug}/`
}

exports.makeTagUrl = (tagName) => `/tags/${slugify(tagName)}`
