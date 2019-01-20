// 列表渲染 v-for(v-for 的优先级比 v-if 更高)
    // 1.  把一个数组对应为一组元素, v-for 块中，我们拥有对父作用域属性的完全访问权限。
        //v-for 还支持一个可选的第二个参数为当前项的索引。
var app1 = new Vue({
    el: "#app-1",
    data: {
        items: ['zhangzongwei','liuguangze','zhaowei'],
    },
    computed: {
        newItems: function () { 
            return this.items.filter(function (items) { 
                return items.match('zhangzongwei')
             })
         }
    },
})
    // 2. v-for 通过一个对象的属性来迭代(遍历对象时，是按 Object.keys() 的结果遍历)。可以提供第二个的参数为键名,第三个参数为索引
var app2 = new Vue({
    el: "#app-2",
    data: {
        items: {
            firstname: 'Zhang',
            lastname: 'zongwei',
            age: 24,
        },
    },
})

    // 3. 给 Vue 一个提示，以便它能跟踪每个节点的身份，从而重用和重新排序现有元素，你需要为每项提供一个唯一 key 属性,key 值是每项都有的唯一 id,它的工作方式类似于一个属性，所以你需要用 v-bind 来绑定动态值,如 :key="item.id" 
    // 4. 数组更新检测
        // Vue 包含一组观察数组的变异方法，将会触发视图更新，即改变原数组
        // 也有非变异 (non-mutating method) 方法，如:filter(), concat() 和 slice(),不会改变原始数组，但总是返回一个新数组
        // 注意事项,Vue 不能检测以下变动的数组:
            // 当你利用索引直接设置一个项时; 解决方法: Vue.set(vm.items, indexOfItem, newValue)或者vm.items.splice(indexOfItem, 1, newValue)
            // 当你修改数组的长度时，解决方法：vm.items.splice(newLength)
app1.items.push('dengweigang')
app1.items.reverse()
Vue.set(app1.items,0,'hahaha')
app1.items.splice(1,1,'hehehe')
    // 5. 对象更新检测
        // Vue 不能检测对象属性的添加或删除
        // 对于已经创建的实例，Vue 不能动态添加根级别的响应式属性，解决方法: 使用 Vue.set(object, key, value) 方法向嵌套对象添加响应式属性
        // 可能需要为已有对象赋予多个新属性,应该用两个对象的属性创建一个新的对象
app2.items.place = 'zhengzhou'
Vue.set(app2.items,'place','zhengzhou') // 并没有发生响应？
app2.items = Object.assign({},app2.items,{
    place: 'zhengzhou',
    school: 'heshida',
})
    // 5. 显示一个数组的过滤或排序副本,可以创建返回过滤或排序数组的计算属性。
        //计算属性不适用的情况下 (例如，在嵌套 v-for 循环中),可以使用一个 method 方法：
    // 6. v-for 也可以取整数
    // 7.利用带有 v-for 的 <template> 渲染多个元素
