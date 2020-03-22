/**
 * 条件类型：T extends U ? X : Y
 */

type ConObj<T> = T extends string ? 'str' :
  T extends number ? 'number' :
  T extends boolean ? 'boolean' :
  'obj'

type con = ConObj<string>
type con2 = ConObj<Function>

/**
 * 分布式条件类型：(A | B) extends U ? X : Y
 * 分为 (A extends U ? X : Y) | (B extends U ? X : Y)
 */

type con3 = ConObj<string | number>

// 实现类型过滤
// ts中对应Exclude<T,U>
type Diff<T,U> = T extends U ? never : T

type diff = Diff<'a' | 'b' | 'c', 'a' | 'e'>

// 过滤掉null，undefined
// ts中对应NonNullable<T>
type NotNullable<T> = Diff<T, null | undefined >

type notNull = NotNullable<string | null | number | undefined>

// ts中Extract<T,U>，从T中抽取符合U的类型
type extract = Extract<'a' | 'b' | 'c', 'a' | 'e'>

// ts中ReturnType<T>, 获取函数返回值

type ret = ReturnType<() => any>