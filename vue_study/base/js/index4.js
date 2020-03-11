// 条件渲染
    // 1. v-if指令("真正"的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。)
        // v-if 是一个指令，所以必须将它添加到一个元素上,如果想切换多个元素呢？此时可以把一个 <template> 元素当做不可见的包裹元素，并在上面使用 v-if。最终的渲染结果将不包含 <template> 元素。
        //v-else 元素必须紧跟在带 v-if 或者 v-else-if 的元素的后面，否则它将不会被识别。v-else-if可以连续使用
        //v-if 也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。更高的切换开销。
var app1 = new Vue({
    el: "#app-1",
    data: {
        ok: true,
    },
})

var app2 = new Vue({
    el: "#app-2",
    data: {
        yes: true,
    },
})

var app3 = new Vue({
    el: "#app-3",
    data: {
        type: 'yesterday',
        message1: "Today is nice !",
        message2: "tommorrow is good !",
        message3: "yesterday is better !",
    },
})
    // 2.Vue 会尽可能高效地渲染元素，通常会复用已有元素而不是从头开始渲染; Vue 为你提供了一种方式来表达“这两个元素是完全独立的，不要复用它们”。只需添加一个具有唯一值的 key 属性即可
var app4 = new Vue({
    el: "#app-4",
    data: {
        loginType: 'emailname',
    },
    methods: {
        toggle: function () { 
            if(this.loginType === 'username'){
                this.loginType = 'emailname'
            }else {
                this.loginType = 'username'
            }
         }
    },
})
    // 3.另一个用于根据条件展示元素的选项是 v-show 指令,带有 v-show 的元素始终会被渲染并保留在 DOM 中。v-show 只是简单地切换元素的 CSS 属性 display。v-show 不支持 <template> 元素，也不支持 v-else
        //v-show 不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换。更高的初始渲染开销。
        