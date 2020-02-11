import React, { useContext, useState, useMemo } from 'react'

/**
 * 自定义Hook，即提取函数组件逻辑复用
 * 1. 自定义 Hook 是一个函数，其名称以 “use” 开头，函数内部可以调用其他的 Hook
 * 2. Hook之间可以传递参数，接收传递的参数就能更新Hook
 */

/**
 * useContext
 * 1. 接收一个context对象，并返回context的当前值，这个当前值是离组件最近的<Context.provider>的value prop值
 * 2. 总会在context值变化时渲染组件，即使使用了shouldWillUpdate和React.memo
 * 3. 因为上面的原因肯定会导致大量的渲染，所以现有三种应对措施：
 * 		- 将容易变动的context拆分出来
 * 		- 将函数组件拆分成两个组件，内部组件使用React.memo()，并且通过props传值
 * 		- 使用useMemo()
 * 		参考：https://github.com/facebook/react/issues/15156
 */

const defaultTheme = {
	color: 'skyblue',
	setColor: () => { }
}

const ThemeContext = React.createContext(defaultTheme)

function Home() {

	return (
		<ThemeContext.Provider value={defaultTheme}>
			<Switch />
		</ThemeContext.Provider>
	)
}


function Switch() {
	return (
		<div>
			<Button />
		</div>
	)
}

function Button() {
	const themeObj = useContext(ThemeContext)

	return (
		<button style={{ color: themeObj.color }}>按钮</button>
	)
}

// export default Home

/**
 * useMemo(function,[])，返回一个memoization的值
 * 1. 和React.memo类似，只不过传入的第一个参数不可以是组件，并且比较的是第二个参数[]里的值
 * 2. 此hook会在渲染期间执行，所以不要在第一个参数中进行副作用的操作
 * 3. 若数组为空，则每次都不会更新
 * 4. 若不传第二个数组，则每次都会渲染
 */

function Memo() {
	const [count, setCount] = useState(0)
	const [subCount, setSubCount] = useState(0)

	function handleClick() {
		setCount(count + 1)
		if (count % 2 === 0) {
			setSubCount(count)
		}
	}

	const data = useMemo(() => {
		console.log('useMemo running...')
		return subCount
	},[subCount])

	return (
		<div>
			<SubMemo data={data} />
			<button onClick={handleClick}>click</button>
		</div>
	)
}

function SubMemo({ data }) {
	console.log('SubMemo running...')
	return (
		<div>{data}</div>
	)
}

export default Memo