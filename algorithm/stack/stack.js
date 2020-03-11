/**
 * 用数组实现顺序栈
 */

function ArrayStack() {
  let arrStack
  // n表示栈的长度
  let len
  // count表示栈目前的元素个数
  let count

  // 初始化栈
  this.init = function(n) {
    arrStack = new Array(n)
    len = n
    count = 0
  }

  // 栈的遍历
  this.traverse = function() {
    if (count == 0) return null
    for (let i=count-1; i>=0; i--) {
      if (arrStack[i]) {
        console.log(arrStack[i])
      }
    }
  }

  // 得到栈顶元素
  this.getTop = function() {
    if (count == 0) return null
    return arrStack[count-1]
  }

  // 入栈操作
  this.push = function(item) {
    if (count == len) return false
    arrStack[count] = item
    count++
    return true
  }

  // 出栈操作
  this.pop = function() {
    if (count == 0) return null
    return arrStack[--count]
  }

  // 主要用于浏览器功能
  this.clear = function() {
    count = 0
  }
}

/**
 * 链栈
 */

function LinkStack() {
  // 栈顶指针
 let top = null

 this.traverse = function() {
   if (!top) return null
   let p = top
   for (p; !!p; p=p.next) {
     console.log(p.val)
   }
 }

 this.getTop = function() {
   if (!top) return null
   return top.val
 }

 this.push = function(item) {
   let newItem = {
     val: item,
     next: null
   }
   if (!top) {
     top = newItem
   } else {
     newItem.next = top
     top = newItem
   }
 }

 this.pop = function() {
   if (!top) return null
   let val = top.val
   top = top.next
   return val
 }

 // 主要用于浏览器功能
 this.clear = function() {
   top = null
 }
}

/**
 * 简单的浏览器前进/回退功能
 */

// 链栈表示
function SimpleLinkBrowser() {
  const normalStack = new LinkStack()
  const backStack = new LinkStack()

  this.browse = function(name) {
    normalStack.push(name)
    backStack.clear()
    this.displayAll()
  }
  
  this.go = function() {
    let name = backStack.pop()
    if (!name) {
      console.info("don't go !")
      return
    }
    normalStack.push(name)
    this.displayAll()
    return normalStack.getTop()
  }
  
  this.back = function() {
    let name = normalStack.pop()
    let nextName = normalStack.getTop()
    if (nextName) {
      backStack.push(name)
    } else {
      normalStack.push(name)
      console.info("don't back !")
      return
    }
    this.displayAll()
    return normalStack.getTop()
  }

  this.displayAll = function() {
    console.log("------normalStack------")
    normalStack.traverse()
    console.log("------backStack------")
    backStack.traverse()
  }
}

// 数组顺序栈表示
function SimpleArrayBrowser() {
  const normalStack = new ArrayStack()
  const backStack = new ArrayStack()
  normalStack.init(10)
  backStack.init(10)

  this.browse = function(name) {
    normalStack.push(name)
    backStack.clear()
    this.displayAll()
  }
  
  this.go = function() {
    let name = backStack.pop()
    if (!name) {
      console.info("don't go !")
      return
    }
    normalStack.push(name)
    this.displayAll()
    return normalStack.getTop()
  }
  
  this.back = function() {
    let name = normalStack.pop()
    let nextName = normalStack.getTop()
    if (nextName) {
      backStack.push(name)
    } else {
      normalStack.push(name)
      console.info("don't back !")
      return
    }
    this.displayAll()
    return normalStack.getTop()
  }

  this.displayAll = function() {
    console.log("------normalStack------")
    normalStack.traverse()
    console.log("------backStack------")
    backStack.traverse()
  }
}

/**
 * 表达式求值 3+5*8-6
 */
const symbolObj = {
  "+": 0,
  "-": 0,
  "*": 1,
  "/": 1
}

function getPriority(l,r) {
  if (symbolObj[l] > symbolObj[r]) return true
  return false
}

function getVal(data1,data2,val) {
  switch(val) {
    case "+":
      return data2+data1
      break
    case "-":
      return data2-data1
      break
    case "*":
      return data2*data1
      break
    case "/":
      return data2/data1
      break
    default: return null
  }
}

function expression(exp) {
  if (!exp) return false
  const dataStack = new ArrayStack()
  dataStack.init(6)
  const symbolStack = new ArrayStack()
  symbolStack.init(6)
  let i = 0
  while(exp[i]) {
    let item = exp[i]
    if (Number(item)) {
      dataStack.push(Number(item))
    } else {
      let topVal = symbolStack.getTop()
      if (topVal) {
        if (getPriority(item,topVal)) {
          symbolStack.push(item)
        } else {
          let data1 = dataStack.pop()
          let data2 = dataStack.pop()
          dataStack.push(getVal(data1,data2,symbolStack.pop()))
          i--
        }
      } else {
        symbolStack.push(item)
      }
    }
    i++
  }
  if (symbolStack.getTop()) {
    let data1 = dataStack.pop()
    let data2 = dataStack.pop()
    dataStack.push(getVal(data1,data2,symbolStack.pop()))
    return dataStack.pop()
  }
  return false
}

/**
 * 括号的匹配：()、[]、{}
 */

const bracketsMap = {
  "(": ")",
  "[": "]",
  "{": "}"
}

function bracketsMatch(exp) {
  if (!exp) return false
  let expArr = [].slice.call(exp)
  const expStack = new LinkStack()
  for (let i=0; i<=expArr.length-1; i++) {
    if (expArr[i] in bracketsMap) {
      expStack.push(expArr[i])
    } else {
      let preBracket = expStack.pop()
      if (!preBracket || bracketsMap[preBracket] !== expArr[i]) return false
    }
    // expStack.traverse()
    // console.log("------------")
  }
  if (!expStack.getTop()) return true
  return false
}

let result = bracketsMatch("([])")

console.log("bracketsMatch: ", result)