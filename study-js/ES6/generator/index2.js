// 使用递归生成fibonacci数列
// 1 1 2 3 5 8 ...

function fibonacci(num) {
  if (num == 0 || num == 1) {
    return num
  }
  return fibonacci(num - 1) + fibonacci(num-2)
}

function* G1() {
  yield 'a'
  yield 'b'
}
function* G2() {
  yield 'x'
  yield 'y'
}

let label = true

for (let i of G1()) {
  console.log(i) 
  if (label) {
    for (let j of G2()) {
      console.log(j)
    }
    label = false
  }
}