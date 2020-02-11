import React, { useState } from 'react';

/**
 * React.memo(Component,callback)是一个高阶组件
 * 1. 类似于React.PureComponent，只不过用于函数组件，只对props起作用，
 *    当然Hook之前的函数组件也没有状态啊
 * 2. 只进行浅比较
 * 3. 可以传入第二个canllback进行自定义比较，接收prevProps和nextProps两个参数
 * 
 * memo的由来：
 * 1. memo即memoization，记忆化
 * 2. memoization是指将之前的结果先存储起来，如果下次遇到一样的参数的调用，就可以直接返回结果
 *    就不用再计算一次了
 */

function Count() {
	const [count,setCount] = useState(1)

	return (
		<div>
			<ShowCount1 count={count} />
			<ShowCount2 count={count} />
			<button onClick={() => setCount(count+1)}>ADD</button>
		</div>
	)
}

const ShowCount1 = React.memo((props) => {
	console.log('ShowCount1 running...')
	return (
		<div>{props.count}</div>
	)
},function(prevProps,nextProps) {
	console.log('prevProps nextProps: ',prevProps,nextProps)
	if ((prevProps.count*2) !== (nextProps.count)) {
		// 返回true不重新渲染
		return true
	}
	// 返回false重新渲染
	return false
})

function ShowCount2(props) {
	console.log('ShowCount2 running...')
	return (
		<div>{props.count}</div>
	)
}

export default Count