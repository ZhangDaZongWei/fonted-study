/**
 * bind方法
 */

// bind做什么？
// 返回一个函数，其中的this指向指定的对象，并且可以接受参数

const obj = {
		name: 'zhangzongwei',
		age: 25
}

function say(name,age) {
	this.name = name
	console.log(this.name + ' ' + age + ' ' + this.age )
}

say.prototype.location = 'beijing'

console.log('bind:　',say.bind(obj,'段书晴')())

// 第一版
Function.prototype.myBind = function(context) {
	self = this
	// 提取出传入的参数
	let args = Array.prototype.slice.call(arguments,1)
	// 返回一个可执行函数
	return function() {
		// 提取出传入的参数
		let args2 = Array.prototype.slice.call(arguments)
		// 再返回函数的执行结果
		// 这里return的意义是怕有返回值
		return self.apply(context,args.concat(args2))
	}
}

console.log('myBind:　',say.myBind(obj,'段书晴')(23))

// 第二版，若返回的绑定函数作为构造函数
// 这时，传入的context就会失效，但是参数依然有用
Function.prototype.myBind2 = function(context) {
	if (typeof this !== 'function') {
		throw new TypeError('callee is not a function.')
	}
	self = this
	let args = Array.prototype.slice.call(arguments,1)
	let bindFn = function() {
		let args2 = Array.prototype.slice.call(arguments)
		// 如果是构造函数调用则this指向构造函数实例
		// 若不是构造函数调用则this指向window/global
		return self.apply(this instanceof bindFn ? this : context, args.concat(args2))
	}
	// 直接赋值原型，很可能会造成同时修改
	// 所以使用一个临时函数中转一下
	let temFn = function() {}
	temFn.prototype = self.prototype
	bindFn.prototype = new temFn()
	return bindFn
}

let bindFn = say.myBind2(obj,'段书晴')

let bindFnObj = new bindFn(23)

console.log('bindFnObj: ',bindFnObj, bindFnObj.location)

let say2 = 'say'
say2.myBind2(obj,'段书晴',23)