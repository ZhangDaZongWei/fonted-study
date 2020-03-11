import React from 'react'
import ReactDOM from 'react-dom'

function InitProject() {
  return (
    <h1>This is a pratice</h1>
  )
}

class SearchBar extends React.Component {
  constructor() {
    super(...arguments)
    this.state = {
      inputValue: '',
      checked: false
    }
  }

  handleInput(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  handleCheckbox(e) {
    this.setState({
      checked: e.target.checked
    })
  }

  render() {
    return (
      <form>
        <div>
          <input 
            type='text' 
            value={this.state.inputValue} 
            placeholder='Search...' 
            onChange={this.handleInput.bind(this)} 
          />
        </div>
        <div>
          <input 
            type='checkbox' 
            checked={this.state.checked} 
            onChange={this.handleCheckbox.bind(this)}
          />
          <label>Only show products in stack</label>
        </div>
      </form>
    )
  }
}

class ProductCategoryRow extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>{this.props.title}</th>
          </tr>
        </thead>
        {this.props.children}
      </table>
    )
  }
}

class ProductRow extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    let goods = this.props.goods
    let productRow = goods.map((item,index) => {
      return (
        <tr key={index}>
          <td>{item.name}</td>
          <td>{item.price}</td>
        </tr>
      )
    })
    return (
      <tbody>
        {productRow}
      </tbody>
    )
  }
}

class ProductTable extends React.Component {
  constructor() {
    super()
    this.state = {
    }
  }

  render() {
    let titles = ['Sporting Goods','Electronics']
    let goods =  [
     [ { name: 'football', price: '$49.99' },
      { name: 'Baseball', price: '$9.99' },
      { name: 'football', price: '$29.99' }],
     [{ name: 'ipod Touch', price: '$99.99' },
      { name: 'iphone5', price: '$399.99' },
      { name: 'Nexus7', price: '$199.99' }]
    ]
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
        </table>
        <ProductCategoryRow title={titles[0]}>
          <ProductRow goods={goods[0]} />
        </ProductCategoryRow>
        <ProductCategoryRow title={titles[1]}>
          <ProductRow goods={goods[1]} />
        </ProductCategoryRow>
      </div>
    )
  }
}

class FilterableProductTable extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div>
        <SearchBar />
        <ProductTable />
      </div>
    )
  }
}

ReactDOM.render(
  <FilterableProductTable />,
  document.getElementById('root')
)