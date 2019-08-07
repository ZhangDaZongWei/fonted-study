var handler = {
  apply: function(target,ctx,args) {
    return 'I am the proxy'
  }
}

function target() {
  return 'I am the target'
}

var p = new Proxy(target,handler)

console.log(p())