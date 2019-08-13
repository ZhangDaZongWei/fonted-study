// 抽离load和save逻辑的高阶组件
import React, {Component} from 'react'

export default (WrapperedComponent,type) => {
  class NewComponent extends Component {

    constructor() {
      super()
      this.state={
        data: null
      }
    }
    
    componentWillMount() {
      let data = localStorage.getItem(type)
      if (data) {
        data = JSON.parse(data)
        this.setState({ data })
      }
    }

    _saveData(data) {
      localStorage.setItem(type,data)
    }

    render() {
      return (
        <div>
          <WrapperedComponent
            data={this.state.data}
            onSaveData={this._saveData.bind(this)}
            {...this.props}
          />
        </div>
      )
    }
  }

  return NewComponent
}