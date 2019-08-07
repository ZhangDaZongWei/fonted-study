//表单输入绑定,v-model 指令在表单 <input>、<textarea> 及 <select> 元素上创建双向数据绑定。
    //v-model 本质上不过是语法糖。它负责监听用户的输入事件以更新数据，并对一些极端场景进行一些特殊处理。会忽略所有表单元素的 value、checked、selected 特性的初始值而总是将 Vue 实例的数据作为数据来源。
    // 1.单个复选框，绑定到布尔值,多个复选框，绑定到同一个数组
var app1 = new Vue({
    el: "#app-1",
    data: {
        message: 'I am a worker',
        textMessage: '',
        checked: true,
        checkedNames: [],
        picked: '',
        selected: 'A',
        options: [
            {text: 'One',value: 'A'},
            {text: 'Two',value: 'B'},
            {text: 'Three',value: 'C'},
        ]
    },
})
    //2.把值绑定到 Vue 实例的一个动态属性上，这时可以用 v-bind 实现，并且这个属性的值可以不是字符串。
var app2 = new Vue({
    el: '#app-2',
    data: {
        checked: 'no',
        picked: '',
        One: 'today',
        Two: 'yesterday',
        selected: 123,
    },
})
    //3.使用修饰符，.lazy转变为使用 change 事件进行同步; .number将用户的输入值转为数值类型; .trim自动过滤用户输入的首尾空白字符
    
