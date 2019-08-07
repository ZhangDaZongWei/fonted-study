let promise = new Promise(function(resolve, reject) {
  console.log("create a proise object");
  if (!true) {
    resolve("bingo");
  } else {
    reject("o,NO");
  }
});

promise
  .then(function(value) {
    console.log("fulfilled: ", value);
  })
  .catch(function(err) {
    console.log("rejected: ", err);
  });

function f1() {
  return 1
}
function f2(a1) {
  let s2 = 2+a1
  console.log("s2: ",s2)
  return s2
}
function f3(a2) {
  let s3 = 3+a2
  console.log("s3: ",s3)
  return s3
}

Promise.resolve(1).then(f2).then(f3).catch(function(err){
  console.log(err)
})