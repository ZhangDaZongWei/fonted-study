import React from "react";

// 1. 多个组件需要反映相同的变化数据，就将其提升至共同的父组件中去
// 2. 子组件通过函数传参的形式向父组件传递值

// 实现了一个判断水是否沸腾的温度计

const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit"
};

const toCelsius = fahrenheit => {
  return ((fahrenheit - 32) * 5) / 9;
};

const toFahrenheit = celsius => {
  return (celsius * 9) / 5 + 32;
};

const tryConvert = (temperature, convert) => {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return "";
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
};

function BoilingVerdict(props) {
  if (Number.isNaN(props.celsius)) {
    return <p>please input temperature</p>;
  }
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  } else {
    return <p>The water would not boil</p>;
  }
}

class TemperatureInput extends React.Component {
  onChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <div>
        <form>
          <label>Enter temperature in {scaleNames[scale]}: </label>
          <input
            value={temperature}
            placeholder="please input"
            onChange={this.onChange.bind(this)}
          />
        </form>
        <BoilingVerdict celsius={parseFloat(temperature)}></BoilingVerdict>
      </div>
    );
  }
}

class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      scale: "c",
      temperature: ""
    };
  }

  handleCelsiusChange(temperature) {
    this.setState({
      scale: "c",
      temperature
    });
  }

  handleFahrenheitChange(temperature) {
    this.setState({
      scale: "f",
      temperature
    });
  }

  render() {
    const temperature = this.state.temperature;
    const scale = this.state.scale;
    const celsius =
      scale === "c" ? temperature : tryConvert(temperature, toCelsius);
    const fahrenheit =
      scale === "f" ? temperature : tryConvert(temperature, toFahrenheit);
    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange.bind(this)}
        />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange.bind(this)}
        />
      </div>
    );
  }
}

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  handleAdd() {
    this.setState(state => ({
      count: state.count + 1
    }));
  }

  render() {
    return (
      <div>
        <h2>{this.state.count}</h2>
        <button onClick={this.handleAdd.bind(this)}>add</button>
        <div>&lt;div&gt;</div>
        <div dangerouslySetInnerHTML={createMarkup()} />
      </div>
    );
  }
}

function NonState() {
  return <div>NonState</div>;
}

function createMarkup() {
  return { __html: "&lt;div&gt;" };
}

export default Counter;
