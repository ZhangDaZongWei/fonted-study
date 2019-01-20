//监听事件，v-on 指令监听 DOM 事件，并在触发时运行一些 JavaScript 代码。
var app1 = new Vue({
	el: "#app-1",
	data: {
		isActive: true,
		message: 0,
	},
})
	//1.事件处理方法，可以接收一个需要调用的方法名称,除了直接绑定到一个方法，也可以在内联 JavaScript语句中调用方法
var app2 = new Vue({
	el: "#app-2",
	data: {
		isActive: true,
		name: 'Vue.js',
	},
	methods: {
		greet: function () { 
			alert("Hello, "+this.name)
			if(event){
				alert(event.target.tagName)//?
			}
		 }
	},
})

var app3 = new Vue({
	el: "#app-3",
	data: {
		isActive: true,
	},
	methods: {
		say: function (message) { 
			alert(message)
		 },
		 warn: function (message,event) { 
			 if(event) event.preventDefault()//?,event.stopPropagation()
			 alert(message)
		  }
		 
	},
})
	//2.在内联语句处理器中访问原始的 DOM 事件。可以用特殊变量 $event 把它传入方法
	//3.事件修饰符(更好的是方法只有纯粹的数据逻辑，而不是去处理 DOM 事件细节)。修饰符是由点开头的指令后缀来表示的。修饰符可以串联。
		//.once 修饰符还能被用到自定义的组件事件上。
		// addEventListener 中的 passive 选项 ? 不要把 .passive 和 .prevent 一起使用,.passive 会告诉浏览器你不想阻止事件的默认行为。
	//4.按键修饰符,v-on:keyup
		//通过全局 config.keyCodes 对象自定义按键修饰符别名, 如 Vue.config.keyCodes.f1 = 112
		//直接将 KeyboardEvent.key ?暴露的任意有效按键名转换为 kebab-case 来作为修饰符，如 <input @keyup.page-down="onPageDown">, 处理函数仅在 $event.key === 'PageDown' 时被调用
	//5.系统修饰键,实现仅在按下相应按键时才触发鼠标或键盘事件的监听器
	var app4 = new Vue({
		el: "#app-4",
		data: {
			isActive: true
		},
		methods: {
			clear: function (event) { 
				event.target.value = ''
			 },
			doSomething: function () { 
				alert("hahaha")
			 }
		},
	})
		//.exact 修饰符允许你控制由精确的系统修饰符组合触发的事件
	//6.鼠标按钮修饰符,会限制处理函数仅响应特定的鼠标按钮
