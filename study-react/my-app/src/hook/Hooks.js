import React, { useContext, useState, useMemo, useCallback, useEffect, useRef, memo, useImperativeHandle, forwardRef, useLayoutEffect, useDebugValue } from 'react'
import styles from './style/hook.module.css';

/**
 * 自定义Hook，即提取函数组件逻辑复用
 * 1. 自定义 Hook 是一个函数，其名称以 “use” 开头，一般有返回值，函数内部可以调用其他的 Hook
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
 * useMemo(() => function,[])，返回一个memoization的值
 * 1. 和React.memo类似，只不过传入的第一个参数不可以是组件，并且比较的是第二个参数[]里的值
 * 2. 此hook会在渲染期间执行，所以不要在第一个参数中进行副作用的操作
 * 3. 若数组为空，则每次都不会更新
 * 4. 若不传第二个数组，则每次都会渲染
 */

/**
 * useCallback(function,[])，返回一个memoization function
 * 相当于useMemo(() => function,[])
 */

/**
 * useMemo和useCallback的作用在于生成memorization，防止不必要的比较
 */

function Memo({baz,bar}) {
	const option = {baz,bar}
	useEffect(() => {
		console.log('option: ', option)
	},[option])

	return <div>{baz.name}-{bar}</div>
}

function MemoParent() {
	const obj = useMemo(() => ({name: 'duanshuqing'}),[])
	const fun = function() {}
	const [baz, setBaz] = useState(obj)
	const [bar, setBar] = useState(fun)

	function handleClick() {
		setBaz('hello')
		setBar('good morning...')
	}

	return <div>
			<Memo baz={baz} bar={bar} />
			<button onClick={handleClick}>change</button>
	</div>
}

// export default MemoParent

const CountButton = memo(function CountButton({count, onClick}) {
	console.log('count: ',count)
	return <button onClick={onClick}>{count}</button>
})

function DualCount() {
	const [count1,setCount1] = useState(0)
	const handleCount1 = useCallback(() => setCount1(count1+1),[count1])
	
	const [count2, setCount2] = useState(0)
	const handleCount2 = useCallback(() => setCount2(count2+1),[count2])

	return (
		<>
			<CountButton count={count1} onClick={handleCount1}></CountButton>
			<CountButton count={count2} onClick={handleCount2}></CountButton>
		</>
	)
}

// export default DualCount

/**
 * useRef(initialValue), 返回一个可变的ref对象，其current属性的初始值为initialValue
 * 1. current属性值可以为任何值，不一定是关于DOM
 * 2. 在每次渲染时，都会返回同一个ref对象
 * 3. 当ref对象内容变动时，如current更改时，不会重新渲染; 可以使用ref回调解决
 */

function RefExample() {
	const divRef = useRef(null)
	function handleClick() {
		divRef.current = 'divRef'
		console.log('divRef: ', divRef.current)
	}
	console.log('divRef2: ', divRef.current)
	return (
		<div>
			<p ref={divRef}>RefExample</p>
			<button onClick={handleClick}>获取</button>
		</div>
	)
}

// export default RefExample

/**
 * useImperativeHandle(ref,createHandle,[deps])
 * 1. 在使用ref时自定义暴露给父组件的属性
 * 2. 需要结合forward使用
 */

 function ImperativeExample(props,ref) {
	 const inputRef = useRef(null)
	 useImperativeHandle(ref,() => ({
		 focus: () => {
			 inputRef.current.focus()
		 }
	 }))
	 return (
		 <input type='text' ref={inputRef}></input>
	 )
 }
ImperativeExample = forwardRef(ImperativeExample)

 function ImperativeExampleParent() {
	 const subRef = useRef(null)
	 function handleClick() {
		 subRef.current.focus()
	 }
	 return (
		 <div>
			 <ImperativeExample ref={subRef} />
			 <button onClick={handleClick}>focus</button>
		 </div>
	 )
 }

//  export default ImperativeExampleParent

 /**
	* useLayoutEffect，和useEffect类似
	* 但是会在DOM更新后，浏览器绘制前触发，可以在里面依据DOM变动做重更新
	* 注意这个过程是同步的
  */

function LayoutEffectExam() {
	const inputGroupRef = useRef(null)
	const inputRef = useRef(null)
	useLayoutEffect(() => {
		function handleFocus() {
			inputGroupRef.current.classList.add(styles.active)
		}
		function handleBlus() {
			inputGroupRef.current.classList.remove(styles.active)
		}
		inputRef.current.addEventListener('focus', e => {
			handleFocus()
		})
		inputRef.current.addEventListener('blur', e => {
			if(!e.target.value) handleBlus()
		})
		return () => {
			inputRef.removeEventListener('focus')
			inputRef.removeEventListener('blur')
		}
	},[])
	return (
		<div className={styles.container}>
			<div ref={inputGroupRef} className={styles.inputGroup}>
				<label className={styles.label}>Your name</label>
				<input ref={inputRef} className={styles.input} type='text' autoComplete='off'></input>
				<div className={styles.border}></div>
			</div>
		</div>
	)
}

export default LayoutEffectExam

/**
 * useDebugValue(val,function)，用于自定义Hook中，便于调试
 */