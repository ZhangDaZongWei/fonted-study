/**
 * 协调的大致过程：
 * 1. 该过程实现的前提：
 *    - 只进行同层级比较，不会进行跨层级比较
 *    - 两个不同类型的元素会产生出不同的树；
 *    - 通过 key prop 来暗示哪些子元素在不同的渲染下能保持稳定；
 * 2. 过程：
 *    - 会先进行根元素的比较，若不同则卸载之前的整个DOM树，包括其中的子元素，
 *      执行componentWillUnMount
 *      生成新的DOM树，执行componentWillMount和componentDidMount
 *    - 对比同一类型的元素时，会比较其属性的改变，对于style属性，则更进一步，
 *      只比较变化的样式属性
 *    - 以上都是比较DOM元素，那么若比较组件元素呢？
 *      当一个组件更新时，组件的实例是不变的，会通过props来使组件和最新的保持一致
 *      会调用componentWillReceiveProps和componentWillUpdate。然后就是render方法
 *      那就进行递归diff算法了
 *    - 当递归DOM节点的子元素时，会同时遍历两个子元素列表，若有不同则生成一个mutation，
 *      对于常见的数组渲染，必须要有key，因为key作为唯一标识可以提升性能
 * 3. 协调过程图：https://user-gold-cdn.xitu.io/2019/10/19/16de3834ffcc66f4?imageslim
 *    diff算法过程图：https://user-gold-cdn.xitu.io/2019/10/19/16de41554a3ff3e2?imageslim
 *    diff源码解读：https://zhuanlan.zhihu.com/p/20346379
 */