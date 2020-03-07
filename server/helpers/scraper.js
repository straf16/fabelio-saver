const $ = require('cheerio')
const rp = require('request-promise')

module.exports = (url) => {
  // console.log(url)
  return new Promise((resolve, reject) => {
    rp(url)
      .then(html => {
        let data = {}
        data.id = $('#maincontent > div.columns > div > div.product-info-main', html).children().last().attr('data-product-id')
        data.name = $('.page-title', html).children().text()
        data.price = $(`#product-price-${data.id}`, html).attr('data-price-amount')
        data.desc = $('#description', html).text()
        data.image = $('#maincontent > div.columns > div > div.product.media > div', html).find('img').attr('src')
        resolve(data)
      })
      .catch(reject)
  })
}
