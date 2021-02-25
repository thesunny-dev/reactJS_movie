import React, { Component } from "react";
// import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.add = () => {
      // console.log("add");
      this.setState = (current) => ({ count: current.count + 1 }); //state는 직접 update하지 않고 setState를 이용해야 render function이 refresh(=새로운 state를 포함해서 페이지새로고침)됨.
    };
    this.minus = () => {
      // console.log("minus");
      this.setState = (current) => ({ count: current.count - 1 });
    };
  }

  render() {
    return (
      <div>
        <h3>숫자는 : {this.state.count}</h3>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
