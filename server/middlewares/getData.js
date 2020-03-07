const scraper = require('../helpers/scraper')

module.exports = async (req, res, next) => {
  try {
    let response = await scraper(req.body.url)
    let data = await response
    req.parseData = data
    next()
  } catch (error) {
    next(error)
  }
}