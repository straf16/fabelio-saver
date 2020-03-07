let arUrl = []

function addUrl (e) {
  e.preventDefault()
  arUrl.push($('#url').val())
  console.log($('#url').val())
  console.log(arUrl)
  fetchProducts()
}

function remove (index) {
  console.log(index, arUrl[index])
  arUrl.splice(index, 1)
  fetchProducts()
}

function fetchProducts () {
  $('#items').empty()
  arUrl.forEach((product, i) => {
    $('#items').append(`
      <li>${product} [<a onclick="remove(${i})">X</a>]</li>
    `)
  })
}

$('document').ready(function () {
  fetchProducts()
})