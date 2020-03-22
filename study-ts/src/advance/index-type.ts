let index_obj = {
  a: 1,
  b: 2,
  c: 3
}

function getValue<T, U extends keyof T>(obj: T, keys: U[]): T[U][] {
  return keys.map(item => obj[item])
}

let value = getValue(index_obj, ['a','b','c'])
// 当keys中传入'e','f'时，得到是undefined，这本应该得到约束
// 使用泛型约束改造后, 报错
// let value2 = getValue(index_obj, ['e','f'])
console.log('value: ', value)

/**
 * keyof, 索引类型的查询操作符
 * keyof T：表示T的所有公共属性的字面量的联合类型
 */

interface Index_obj {
  a: number
  b: number
}

let key: keyof Index_obj

/**
 * 索引访问操作符T[k], 表示所访问属性的类型
 */

let key2: Index_obj['a']