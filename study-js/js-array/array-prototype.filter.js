function isBigEnough(element) {
  return element > 10
}

var filtered = [12,13,9,8,20,1].filter(isBigEnough)

console.log(filtered)

// -----------------------------------------------------

console.log(typeof null)
console.log(typeof undefined)
console.log(isNaN(NaN))

// -----------------------------------------------------

var fruits = ['apple','banana','grapes','mango','orange']

var filterItem = (query) => {
  return fruits.filter((el) => {
    return el.toLowerCase().indexOf(query.toLowerCase()) > -1
  })
}

console.log(filterItem('gr'))
console.log(filterItem('an'))