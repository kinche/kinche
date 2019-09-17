require('dotenv').config()

module.exports = {
  target: 'serverless',
  env: {
    COOKIES_NAME: process.env.COOKIES_NAME,
    COOKIES_DOMAIN: process.env.COOKIES_DOMAIN
  }
}
