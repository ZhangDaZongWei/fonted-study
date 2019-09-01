// js正则实现千位分隔符

function commafy(num) {
  num = num + ''
  let regax = /^(-?\d+)(\d{3})$/
  if (regax.test(num)) {
    num = num.replace(regax,'$1,$2')
    return num
  }
}

const c1 = commafy(100.00)

console.log('c1: ',c1)