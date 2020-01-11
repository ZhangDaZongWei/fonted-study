function compose(...funcs) {
  if (funcs.length === 1) {
    return funcs[0]
  }
  // return funcs.reduce((a, b) => (...args) => a(b(...args)))
  return funcs.reduce((a,b) => {
    // console.log('reduce a: ', a)
    // console.log('reduce b: ', b)
    return (...args) => a(b(...args))
  })
}

let x = 10
function fn1(x) { console.log('running 1'); return x + 1}
function fn2(x) { console.log('running 2'); return x + 2}
function fn3(x) { console.log('running 3'); return x + 3}
function fn4(x) { console.log('running 4'); return x + 4}

// let result = fn4(fn3(fn2(fn1(x))))
result = compose(fn1,fn2,fn3,fn4)

console.log('result: ', result(x))