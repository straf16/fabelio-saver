const Product = require('../models/Product')

class ProductController {
  static add (req, res, next) {
    const { name, price, desc } = req.parseData
    Product
      .create({
        name,
        price: 'Rp ' + price,
        desc
      })
      .then(result => {
        res.status(201).json(result)
      })
      .catch(next)
  }
  static get (req, res, next) {
    Product
      .find({})
      .then(result => {
        if (result.length != 0) {
          res.status(200).json(result)
        } else {
          next({
            status: 404,
            message: 'No Data'
          })
        }
      })
      .catch(next)
  }
  static getId (req, res, next) {
    Product
      .findById(req.params.id)
      .then(result => {
        if (result) {
          res.status(200).json(result)
        } else {
          next({
            status: 404,
            message: 'Not Found'
          })
        }
      })
      .catch(next)
  }
  static delete (req, res, next) {
    Product
      .findByIdAndDelete(req.params.id)
      .then(result => {
        if (result) {
          res.status(200).json(result)
        } else {
          next({
            status: 404,
            message: 'Not Found'
          })
        }
      })
      .catch(next)
  }
}

module.exports = ProductController
