// 未解决得问题
// 通过用 Vue 函数创建一个新的 Vue 实例开始
// Vue实例
// 1. data：一个 Vue 实例被创建时，它向 Vue 的响应式系统中加入了其 data 对象中能找到的所有的属性，
//          只有当实例被创建时 data 中存在的属性才是响应式的。
//          Object.freeze()，这会阻止修改现有的属性，也意味着响应系统无法再追踪变化。
var data = {
    a: 1
}
var vm = new Vue({
    data: data
})
console.log(vm.a == data.a)
data.a = 5
console.log(vm.a)
console.log(data.a)

//模板语法
//插值
// 1. 使用“Mustache”语法 (双大括号) 的文本插值，Mustache 标签将会被替代为对应数据对象上 msg 属性的值,使用v-once执行            一次性地插值，当数据改变时，插值处的内容不会更新。
// 2. 双大括号会将数据解释为普通文本，而非 HTML 代码。真正的 HTML，你需要使用 v-html 指令.不能使用 v-html 来复合局部模板，      因为 Vue不是基于字符串的模板引擎。
// 3. 对可信内容使用 HTML 插值，绝不要对用户提供的内容使用插值,很容易导致 XSS 攻击
var app1 = new Vue({
    el: "#app-1",
    data: {
        message: '<span style="color: red">This should  be red.</span>'
    }
})
// 4. Mustache 语法不能作用在 HTML 特性上，遇到这种情况应该使用 v-bind 指令.布尔特性的情况下，v-bind 工作起来略有不同
// 5. 使用JavaScript表达式，每个绑定都只能包含单个表达式。模板表达式都被放在沙盒中，只能访问全局变量的一个白名单，如 Math         和 Date 。你不应该在模板表达式中试图访问用户定义的全局变量。
// 指令
// 1. 指令 (Directives) 是带有 v- 前缀的特殊特性。指令特性的值预期是单个 JavaScript 表达式，当表达式的值改变时，将其产生的连带影响，响应式地作用于 DOM。
// 2. 一些指令能够接收一个“参数”，在指令名称之后以冒号表示。如 v-bind 指令将该元素的 href 特性与表达式 url 的值绑定。 v-on       指令，它用于监听 DOM 事件(参数是监听的事件名)。
// 修饰符
// 1. 以半角句号 . 指明的特殊后缀，用于指出一个指令应该以特殊方式绑定。
// 缩写 v-bind:href => :href; v-on:click => @click
// 计算属性和监听器
// 1. 任何复杂逻辑，你都应当使用计算属性
var app2 = new Vue({
    el: "#app-2",
    data: {
        question: '',
        message: 'Hello',
        answer: 'I cannot give you an answer until you ask a question!'
    },
    computed: {
        // 声明了一个计算属性 reversedMessage。我们提供的函数将用作属性 vm.reversedMessage 的 getter 函数
        // 计算属性是基于它们的依赖进行缓存的,只在相关依赖发生改变时它们才会重新求值。
        // 与方法不同的是，每当触发重新渲染时，调用方法将总会再次执行函数
        reserveMessage1: function () {
            return this.message = this.message.split('').reverse().join('')
        }
    },
    methods: {  
        reserveMessage2: function () {
            return this.message.split('').reverse().join('')
        },
        getAnswer: function () {
            if (this.question.indexOf('?') === -1) {
                this.answer = 'Questions usually contain a question mark. ;-)'
                return
            }
            this.answer == 'Thinking...'
            var vm = this
            axios.get('https://yesno.wtf/api')
                .then(function (response) {
                    vm.answer = _.capitalize(response.data.answer)
                })
                .catch(function (error) {
                    vm.answer = 'Error! Could not reach the API. ' + error
                })
        }
    },
    
    // 2. 当需要在数据变化时执行异步或开销较大的操作时，使用watch侦听器
    watch: {
        question: function (newQuestion, oldQuestion) {
            this.answer = 'Waiting for you to stop typing...'
            this.debouncedGetAnswer()
        }
    },
    created : function () {
        this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
    },
})