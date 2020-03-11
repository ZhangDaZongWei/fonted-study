/**
 * apply方法
 */

// 类似call，只不过传入的参数是数组

Function.prototype.myApply = function(context, args) {
  context = context || window;
  context.fn = this;
  let ret
  if (!args) {
    ret = context.fn()
  } else {
    ret = context.fn(...args);
  }
  delete context.fn;
  if (ret) {
    return ret;
  }
};

function say(name,age) {
  console.log("L Love ", this.name);
  return {
    name,
    age
  }
}

let obj = {
	name: '段书晴'
};

say.myApply(obj,['张宗伟',25])


