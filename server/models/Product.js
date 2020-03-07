const { Schema, model } = require('mongoose')

const productSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Product name is required']
  },
  desc: {
    type: String,
    required: [true, 'Product name is required']
  },
  price: {
    type: String,
    required: [true, 'Price is required']
  },
  images: [{
    type: String,
  }],
}, {
  versionKey: false,
  timestamps: true
})

const Product = model('Product', productSchema)

module.exports = Product
