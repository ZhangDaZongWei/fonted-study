/**
 * 映射类型：可以理解成使用了keyof的类型，预先定义的泛型接口
 */

interface Map_obj {
  a: number
  b: number
  c: number
}

/**
 * 同态
 */

// 使每个成员变为只读
type Mapping = Readonly<Map_obj>

// 选取指定的属性
type Mapping2 = Pick<Map_obj, 'a' | 'b'>

// 变为可选属性
type Mapping3 = Partial<Map_obj>

type Mapping4 = Record<'x' | 'y', Map_obj>
