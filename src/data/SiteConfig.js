const config = {
  siteTitle: 'Mark Walker, python developer', // Site title.
  siteTitleShort: 'Mark Walker', // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Mark Walker's developer stories", // Alternative site title for SEO.
  siteLogo: 'https://avatars2.githubusercontent.com/u/1461191', // Logo used for SEO and manifest.
  siteUrl: 'https://www.markw.co.uk', // Domain of your website without pathPrefix.
  pathPrefix: '/', // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: 'Something maybe related to Mark Walker.', // Website description used for RSS feeds/meta description tag.
  siteRss: '/rss.xml', // Path to the RSS file.
  siteRssTitle: 'marksweb.co.uk or markw.co.uk', // Title of the RSS feed
  siteFBAppID: '271307594311758', // FB Application ID for using app insights
  googleAnalyticsID: 'G-9W9N6CTXN9', // GA tracking ID.
  disqusShortname: '',
  dateFromFormat: 'YYYY-MM-DD', // Date format used in the frontmatter.
  dateFormat: 'DD/MM/YYYY', // Date format for display.
  postsPerPage: 5, // Amount of posts displayed per listing page.
  userName: 'Mark Walker', // Username to display in the author segment.
  userEmail: 'theshow@gmail.com', // Email used for RSS feed's author segment
  userTwitter: 'markwalker_', // Optionally renders 'Follow Me' in the UserInfo segment.
  userLocation: 'Chester, England', // User location to display in the author segment.
  userAvatar: 'https://avatars2.githubusercontent.com/u/1461191', // User avatar to display in the author segment.
  userDescription: 'Python devloper.', // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: 'GitHub',
      url: 'https://github.com/marksweb',
      iconClassName: 'fa fa-github',
    },
    {
      label: 'Twitter',
      url: 'https://twitter.com/markwalker_',
      iconClassName: 'fa fa-twitter',
    },
    {
      label: 'Email',
      url: 'mailto:theshow@gmail.com',
      iconClassName: 'fa fa-envelope',
    },
  ],
  copyright: 'Copyright © 2020. Mark Walker', // Copyright string for the footer of the website and RSS feed.
  themeColor: '#c62828', // Used for setting manifest and progress theme colors.
  backgroundColor: '#e0e0e0', // Used for setting manifest background color.
}

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
  config.pathPrefix = '/'
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/')
  config.siteUrl = config.siteUrl.slice(0, -1)

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== '/')
  config.siteRss = `/${config.siteRss}`

module.exports = config
