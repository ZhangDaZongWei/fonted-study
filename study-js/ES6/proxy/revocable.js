let target = {}

let handler = {
  get: (target,property) => {
    return 35
  },
  set: (target,property,value) => {
    if (value > 20) {
      target[property] = value
    } else {
      console.log("you cannot set this value")
    }
  }
}

let {proxy,revoke} = Proxy.revocable(target,handler)

console.log(proxy.age = 25)

console.log(target)

