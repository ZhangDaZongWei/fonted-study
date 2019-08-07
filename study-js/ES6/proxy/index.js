let obj = {
  name: 'zhangzongwei',
  age: 25
}

let newObj = new Proxy(obj,{
  get: function(target,property) {
    console.log("你访问了obj对象",target)
    if (property in obj) {
      return target[property]
    } else {
      console.warn("你访问的属性不存在");
      return '^_^'
    }
  }
})

console.log(newObj.name)
console.log(newObj.city)

// ----------------------------------------

// 创造html元素
let DOM = new Proxy({},{
  // set(target,property,value)
  // get(target,property) return
  // deleteProperty(target,property)
  // has(target,property) return
  // bind
  get(target,property) {
    return function(attr={},...children) {
      let div = document.createElement(property)
      for (let item of Object.keys(attr)) {
        div.setAttribute(item, attr[item])
      }
      for (let item of children) {
        if (typeof item === 'string') {
          item = document.createTextNode(item)
        }
        div.append(item)
      }
      return div
    }
  }
})

let div = DOM.div({id:'firstId',class:'firstClass'},"I am a first div"," here is myContent")
let ul = DOM.ul(undefined,DOM.li(undefined,'one'),DOM.li(undefined,'two'),DOM.li(undefined,'three'))

function appendToBody() {
  for (let el of arguments) {
    document.body.append(el)
  }
}

appendToBody(div,ul)
console.log(div)