/**
 * Array.from 将类数组和可迭代对象转换为数组，这个过程用的浅拷贝
 */

function likeArr() {
  console.log([...arguments])
  console.log(Array.from(arguments))
}

likeArr(1,2,3)