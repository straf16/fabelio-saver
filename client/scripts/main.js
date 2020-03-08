let arUrl = []

function addUrl (e) {
  e.preventDefault()
  const url = $('#url').val()
  $
    .ajax({
      method: 'POST',
      url: 'http://34.87.167.211/products',
      data: { url }
    })
    .done(response => {
      fetchProducts()
      console.log(response)
    })
    .fail(err => {
      console.log(err)
    })
    .always(() => {
      $('#url').val('')
    })
}

function remove (e, index) {
  e.preventDefault()
  $
    .ajax({
      method: 'DELETE',
      url: `http://34.87.167.211/products/${index}`
    })
    .done(response => {
      fetchProducts()
      console.log(response)
    })
    .fail(err => {
      console.log(err)
    })
}

function fetchProducts () {
  $('#products-table').empty()
  $('#products-table').append(`
    <tr>
      <th class="name-product">Name</th>
      <th class="price-product">Price</th>
      <th>Description</th>
      <th>Action</th>
    </tr>
  `)
  $
    .ajax({
      method: 'GET',
      url: 'http://34.87.167.211/products'
    })
    .done(response => {
      response.forEach(product => {
        $('#products-table').append(`
          <tr>
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td class="desc-product">${product.desc}</td>
            <td><button onclick="remove(event, '${product._id}')">Delete</button></td>
          </tr>
        `)
      })
    })
    .fail(console.log)
}

$('document').ready(function () {
  fetchProducts()
})