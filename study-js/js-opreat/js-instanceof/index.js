// instanceof: 判断一个实例对象，是否属于给定的数据类型
// 判断规则：对于左边的对象记为A，右边变量记为B，沿着A的_proto_这条线来找，沿着B的prototype这条线来找
// 当能找到同一个引用，则返回true，如果到终点还未重合，则返回false



function LikeArray() {
  this.type = 'function'
}

