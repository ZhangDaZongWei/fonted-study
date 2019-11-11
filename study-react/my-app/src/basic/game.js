// 1. React中有类的概念，如组件类都继承React.Component类
// 2. 不同的React组件其实就是作用不同而已
// 3. 组件可以接受外部参数，叫做props
// 4. render方法返回需要渲染的视图，其实render返回了一个React元素，每一个元素都是一个js对象，所以就可以如操作对象般操作它
// 5. JSX语法
// 6. 函数组件，当组件中只包含一个render方法，并不包括state时使用。不必继承React.Component类。

import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'


// class Square extends React.Component {
//   // state是Square组件的私有属性
//   constructor(props) {
//     super(props)
//     this.state = {
//       value: null
//     }
//   }
//   render() {
//     return (
//       <button className="square" onClick={() => this.props.onClick()}>
//         {/* TODO */}
//         {this.props.value}
//         {/* {this.state.value} */}
//       </button>
//     );
//   }
// }

// 使用函数组件重写Square组件

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  )
}

class Board extends React.Component {

  renderSquare(i) {
    // 此onclick并不是click事件，它就是普通的props，只不过它的值是函数
    return <Square value={this.props.squares[i]} onClick={() => this.props.onClick(i)} />;
  }

  // 自动更新
  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      history: [{
        squares: Array(9).fill(null)
      }],
      xIsNext: true,
      stepNumber: 0
    }
  }
  handleClick(i) {
    // 创建一个副本，数据不可变性很重要
    const history = this.state.history.slice(0,this.state.stepNumber + 1)
    const current = history[history.length - 1]
    const squares = current.squares.slice()
    if (calculateWinner(squares) || squares[i]) {
      return
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O'
    this.setState({
      history:history.concat([{
        squares: squares
      }]),
      xIsNext: !this.state.xIsNext,
      stepNumber: history.length
    })
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0
    })
  }

  render() {
    const history = this.state.history
    const current = history[this.state.stepNumber]
    const winner = calculateWinner(current.squares)

    const moves = history.map((step,move) => {
      const desc = move ? 'Go to move #' + move : 'Go to game start'
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      )
    })

    let status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O')
    if (winner) {
      status = 'Winner: ' + winner
    }
    return (
      <div className="game">
        <div className="game-board">
          <Board squares = {current.squares} onClick = {(i) => this.handleClick(i)} />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]
  for (let i=0; i<lines.length; i++) {
    const [a,b,c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}

export default Game 

// ========================================

// ReactDOM.render(
//   <Game />,
//   document.getElementById('root')
// );
