import React, { Component } from "react";
import ReactDOM from "react-dom";

class ReactExp extends Component {
  render() {
    return (<span>React Webpack</span>)
  }
}

ReactDOM.render(<ReactExp />, window.document.getElementById("root"));
