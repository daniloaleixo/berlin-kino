/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://berlinkino.aereozen.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  outDir: './out',
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' }
    ],
  },
}
