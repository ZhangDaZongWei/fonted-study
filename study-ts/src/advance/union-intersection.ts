/**
 * 联合和交叉类型
 * 1. 交叉类型，几种类型的并集，实现对象的混入
 * 2. 联合类型，几种类型的或，或者取交集
 */

interface DogType {
  eat(): void
}

interface CatType {
  run(): void,
  name: string
}

// 必须将DogType和CatType中的属性都实现
type AnimalIType = DogType & CatType

class SpeicalAnimal implements AnimalIType {
  name: string = 'speical'
  eat() {}
  run() {}
  say() {}
}

class UIDog implements DogType {
  name: string = 'dog'
  eat() {}
}

class UICat implements CatType {
  name: string = 'cat'
  run() {}
}

type AnimalType = 'dog' | 'cat'
function getAnimalType(animalType: AnimalType) {
  let type = animalType === 'dog' ? new UIDog() : new UICat()
  // 访问联合类型的公共属性/方法是可以的
  return type.name
}

// 利用可以访问共有属性的特征，来创建不同的类型保护区块
interface Rectangle {
  kind: 'rectangle',
  width: number,
  height: number
}

interface Square {
  kind: 'square',
  size: number
}

interface Circle {
  kind: 'circle',
  r: number
}

type Shape = Rectangle | Square | Circle
function area(s: Shape): number {
  // 根据kind属性，创建不同保护区块
  switch(s.kind) {
    case 'rectangle':
      return s.width * s.height
    case 'square':
      return s.size
    case 'circle':
      return s.r
    default:
      // 返回这个函数的意思了，检查s是否为never类型，以确定分支是否包含所有情况
      return ((e: never) => {
      throw new Error()
    })(s)
  }
}
