function* generatorTest() {
  yield 5
  yield 4
  return "test"
}

var g = generatorTest()

g.next()

try {
  g.next()
}catch(e) {
  console.log(e)
}
// console.log(g1.value,g1.done)
// g2 = g.next()

// console.log(g2.value,g2.done)
// g3 = g.next()

// console.log(g3.value,g3.done)

// console.log(g.next().done)