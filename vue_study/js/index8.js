//组件基础
	//1.组件是可复用的 Vue 实例,在一个通过 new Vue 创建的 Vue 根实例中，把这个组件作为自定义元素来使用,与 new Vue 接收相同的选项，例如 data、computed、watch、methods 以及生命周期钩子等。仅有的例外是像 el 这样根实例特有的选项
Vue.component('component-demo',{
	data: function () { 
		return {
			count: 0,
		}
	 },
	 props: ['keys','title'],
	 template: `<div>
								<button v-on:click=" count += 1">click me {{count}} times</button>
								<p>{{ keys }}</p>
								<p>{{ title }}</p>
							</div>`,
})
var app1 = new Vue({
	el: "#app-1",
	data: {
		posts: [
			{id: 1, title: 'Study Vue'},
			{id: 2, title: 'Study php'},
			{id: 3, title: 'Study JS'}]
	}
})
	//2.一个组件的 data 选项必须是一个函数，因此每个实例可以维护一份被返回对象的独立的拷贝
	//3.组件的组织，以一棵嵌套的组件树的形式。两种组件的注册类型：全局注册和局部注册。全局注册的组件可以用在其被注册之后的任何 (通过 new Vue) 新创建的 Vue 根实例
	//4.通过 Prop 向子组件传递数据，Prop 是你可以在组件上注册的一些自定义特性，当一个值传递给一个 prop 特性的时候，它就变成了那个组件实例的一个属性,使用 v-bind 来动态传递 prop
	//5.每个组件必须只有一个根元素，将模板的内容包裹在一个父元素内，来修复这个问题
	//6.重构一下这个 <blog-post> 组件了，让它变成接受一个单独的 post prop？
	//7.和父级组件进行沟通，通过事件向父级组件发送消息，Vue 实例提供了一个自定义事件的系统，调用内建的 $emit 方法并传入事件的名字，来向父级组件触发一个事件，用 v-on 在博文组件上监听这个事件, 
	//使用事件抛出一个值,使用 $emit 的第二个参数来提供这个值; $event 访问到被抛出的这个值,如果这个事件处理函数是一个方法,那么这个值将会作为第一个参数传入这个方法
Vue.component('post-demo',{
	props:['post'],
	template: `
		<div>
			<h3>{{ post.title }}</h3>
			<button v-on:click="$emit('enlarge-text',0.1)">Enlarge text</button>
			<div v-html="post.content"></div>
		</div>
	`
})

var app2 = new Vue({
	el: '#app-2',
	data: {
		postFontSize: 1,
		posts: [
			{title: 'study vue',content: '<p>I am studying vue</p>'},
			{title: 'study php',content: '<p>I am studying php</p>'},
			{title: 'study js', content: '<p>I am studying js</p>'}
		]
	},
	methods: {
		onEnlargeText: function (enlargetext) { 
			this.postFontSize += enlargetext
		 }
	},
})

	//8.在组件上使用 v-model
		//v-model="searchText"等价于： v-bind:value="searchText"  v-on:input="searchText = $event.target.value"
		//组件内的 <input>:将其 value 特性绑定到一个名叫 value 的 prop 上,在其 input 事件被触发时，将新的值通过自定义的 input 事件抛出
Vue.component('custom-input',{
	props: ['value'],
	template:`<input v-bind:value="value" v-on:input="$emit('input',$event.target.value)">`
})
var app3 = new Vue({
	el: '#app-3',
	data: {
		searchText: '',
	},
})