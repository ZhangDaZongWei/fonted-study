// instanceof: 判断一个实例对象，是否属于给定的数据类型
// 判断规则：对于左边的对象记为A，右边变量记为B，沿着A的_proto_这条线来找，沿着B的prototype这条线来找(只找一次)
// 当能找到同一个引用，则返回true，如果到终点还未重合，则返回false

function likeInstanceof(left,right) {
  let rightPrototype = right.prototype
  let leftProto = left.__proto__
  while(leftProto) {
    if (leftProto === rightPrototype) {
      return true
    }
    leftProto = leftProto.__proto__
  }
  return false
}

function F1() {}

function F2() {}

F1.prototype = F2.prototype

let f1 = new F1()

let f2 = new F2()

console.log(f1 instanceof F1,likeInstanceof(f1,F1),likeInstanceof(f1,F2))

console.log(f2 instanceof F2,likeInstanceof(f2,F2))