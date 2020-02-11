function* generatorTest() {
  console.log('running...')
  let y1 = yield 5
  console.log('second running... ',y1)
  let y2 = yield 4
  console.log('third running...', y2)
  return "test"
}

let g = generatorTest()
console.log('g: ',g[Symbol.iterator])

console.log(g.next('hello'))
// console.log(g.next('hi'))
// console.log(g.next('zhang'))