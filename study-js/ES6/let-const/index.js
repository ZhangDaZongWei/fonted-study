// {
//   let a = 10
//   var b = 5
// }
// alert(a)
// alert(b)

// alert(typeof c)
// let c = 2 

// var d = 4
// var d = 5
// alert(d)

function f() {
  alert('I am outside.')
}

(function (){
  if(false){
    let f = function (){
      alert('I am inside.')
    }
  }
  f()
}())