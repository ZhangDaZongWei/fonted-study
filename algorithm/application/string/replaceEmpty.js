/**
 * 将字符串中的每个空格，改为%20
 */

const str = 'we are happy'

// 方法一：使用正则表达式
function replaceEmpty(str) {
  console.time('replaceEmpty')
  const re = / /g
  console.timeEnd('replaceEmpty')
  return str.replace(re,'%20') 
}

console.log('replaceEmpty: ', replaceEmpty(str))

// 方法二：遍历字符串，找出空格，然后替换
function replaceEmpty2(str) {
  console.time('replaceEmpty2')
  const strArr = str.split("")
  const NewStrArr = strArr.map(item => {
    if (item === " ") return "%20"
    return item
  })
  console.timeEnd('replaceEmpty2')
  return NewStrArr.join("")
}

console.log('replaceEmpty2: ', replaceEmpty2(str))