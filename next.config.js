require('dotenv').config()

module.exports = {
  target: 'serverless',
  env: {
    KINCHE_COOKIES_DOMAIN: process.env.KINCHE_COOKIES_DOMAIN,
    KINCHE_COOKIES_REDIRECT: process.env.KINCHE_COOKIES_REDIRECT,
    KINCHE_COOKIES_TOKEN: process.env.KINCHE_COOKIES_TOKEN
  }
}
