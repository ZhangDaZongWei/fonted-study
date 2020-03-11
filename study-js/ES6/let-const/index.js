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
  console.log('I am outside.')
}

(function (){
  if(false){
    let f = function (){
      console.log('I am inside.')
    }
  }
  f()
}())