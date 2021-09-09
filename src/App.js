import React, { Component } from "react";
import Cronometro from "./assets/cronometro.png";
import "../src/style.css";
import Button from "./Components/Button/Button";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numero: 0,
      botao: "Go!",
    };
    this.timer = null;
    this.go = this.go.bind(this);
    this.reset = this.reset.bind(this);
  }

  go() {
    if (this.timer !== null) {
      clearInterval(this.timer);
      this.timer = null;
      this.setState({ botao: "Go!" });
    } else {
      this.timer = setInterval(() => {
        let state = this.state;
        state.numero += 0.1;
        state.botao = "Stop";
        this.setState(state);
      }, 100);
    }
  }

  reset() {
    if (this.timer !== null) {
      clearInterval(this.timer);
      this.timer = null;
    }
    let state = this.state;
    state.numero = 0;
    state.botao = "Go!";
    this.setState(state);
  }
  render() {
    return (
      <div className="container">
        <div className="timerBox">
          <img src={Cronometro} alt="" className="img" />
          <a className="timer">{this.state.numero.toFixed(1)}</a>
        </div>
        <div className="areaBtn">
          <Button handleClick={this.go} nome={this.state.botao} />
          <Button handleClick={this.reset} nome="Reset" />
        </div>
      </div>
    );
  }
}

export default App;
