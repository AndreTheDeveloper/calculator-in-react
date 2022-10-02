import React, { Component } from "react";

class Calculator extends Component {
  state = {
    selected: 0,
    previousSelected: 0,
    lastSelection: "",
  };

  handleClick = (e) => {
    if (e.target.value >= 0 && e.target.value <= 9) {
      if (this.state.selected > 0 || this.state.previousSelected === ".") {
        this.setState({ selected: this.state.selected + e.target.value });
      } else {
        this.setState({ selected: e.target.value });
      }
    } else if (e.target.value === "AC") {
      this.setState({ selected: 0 });
      this.setState({ previousSelected: 0 });
    } else if (e.target.value === "+/-") {
      this.setState({ selected: this.state.selected * -1 });
    } else if (e.target.value === "%") {
      this.setState({ selected: this.state.selected / 100 });
    } else if (e.target.value === "X") {
      this.setState({ lastSelection: "X" });
      this.setState({ previousSelected: this.state.selected });
      this.setState({ selected: 0 });
    } else if (e.target.value === "/") {
      this.setState({ lastSelection: "/" });
      this.setState({ previousSelected: this.state.selected });
      this.setState({ selected: 0 });
    } else if (e.target.value === "+") {
      this.setState({ lastSelection: "+" });
      this.setState({ previousSelected: this.state.selected });
      this.setState({ selected: 0 });
    } else if (e.target.value === "-") {
      this.setState({ lastSelection: "-" });
      this.setState({ previousSelected: this.state.selected });
      this.setState({ selected: 0 });
    } else if (
      e.target.value === "." &&
      this.state.selected - Math.floor(this.state.selected) === 0
    ) {
      this.setState({ previousSelected: "." });
      this.setState({ selected: this.state.selected + "." });
    } else if (e.target.value === "=") {
      if (this.state.lastSelection === "X") {
        this.setState({
          selected: this.state.previousSelected * this.state.selected,
        });
      } else if (this.state.lastSelection === "/") {
        this.setState({
          selected: this.state.previousSelected / this.state.selected,
        });
      } else if (this.state.lastSelection === "+") {
        this.setState({
          selected: +this.state.previousSelected + +this.state.selected,
        });
      } else if (this.state.lastSelection === "-") {
        this.setState({
          selected: +this.state.previousSelected - this.state.selected,
        });
      }
      this.setState({ lastSelection: false });
      this.setState({ previousSelected: 0 });
    }
  };

  render() {
    return (
      <div className="container" onClick={(e) => this.handleClick(e, "value")}>
        <div className="row1">{this.state.selected}</div>
        <div className="row2">
          <button value={"AC"}>AC</button>
          <button value={"+/-"}>+/-</button>
          <button value={"%"}>%</button>
          <button value={"/"}>/</button>
        </div>
        <div className="row3">
          <button value={7}>7</button>
          <button value={8}>8</button>
          <button value={9}>9</button>
          <button value={"X"}>X</button>
        </div>
        <div className="row4">
          <button value={4}>4</button>
          <button value={5}>5</button>
          <button value={6}>6</button>
          <button value={"-"}>-</button>
        </div>
        <div className="row5">
          <button value={1}>1</button>
          <button value={2}>2</button>
          <button value={3}>3</button>
          <button value={"+"}>+</button>
        </div>
        <div className="row6">
          <button value={0}>0</button>
          <button value={"."}>.</button>
          <button value={"="}>=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
