// Class与Style绑定
//Class绑定
	// 1.将 v-bind 用于 class 和 style 时，Vue.js 做了专门的增强。表达式结果的类型除了字符串之外，还可以是对象或数组。
	// 2.对象语法
		// 在对象中传入更多属性来动态切换多个 class,v-bind:class 指令也可以与普通的 class 属性共存。
var app1 = new Vue({
	el: "#app-1",
	data: {
		isActive: true,
		isOpen:true
	}
})
		// 绑定的数据对象不必内联定义在模板里
var app2 = new Vue({
	el: "#app-2",
	data: {
		classObject: {
			vue: true,
			frontStyle: true, 
			frontBold: true
		}
	}
})
		// 也可以在这里绑定一个返回对象的计算属性。
var app3 = new Vue({
	el: "#app-3",
	data: {
		isActive: true,
		isOpen: false,
		isMove: false,
	},
	computed: {
		classStyle: function() {
			return {
				frontStyle: this.isActive && this.isOpen,
				frontBold: this.isActive || this.isOpen,
				vue: this.isMove,
			}
		}
		
	},
})
	// 2.数组表示法 与 数组中可以用三元表达式法和对象
var app4 = new Vue({
	el: "#app-4",
	data: {
		vue: 'vue',
		frontStyle: 'frontStyle',
		frontBold: 'frontBold',
		isActive: 'true',
	}
})
	// 3.用在组件component上，在一个自定义组件上使用 class 属性时，这些类将被添加到该组件的根元素上面。这个元素上已经存在的类不会被覆盖
//Style(内联样式)绑定
	// 1. 对象语法，类似Class绑定
var app5 = new Vue({
	el: "#app-5",
	data: {
		isActive: 'red',
		isOpen: 30 + 'px',
	}
})
/*
var app6 = new Vue({
	el: "#app-6",
	data: {
		styleObject: {
			color: 'skyblue',
			fontSize: "50px",
		}
		
	}
}) */
var app6 = new Vue({
	el: "#app-6",
	computed: {
		styleObject: function () { 
			return {
				color: 'skyblue',
				fontSize: '40px',
			}
		 }
	},
})
	// 2.数组对象语法
var app7 = new Vue({
	el: "#app-7",
	data: {
		colorStyle:{
			color: 'red',
		},
		fontSizeStyle: {
			fontSize: '50px',
		},
	},
})
// 自动添加浏览器引擎前缀; 可以为 style 绑定中的属性提供一个包含多个值的数组，常用于提供多个带前缀的值