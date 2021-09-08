import React, { Component } from "react";
import "./button.css";

export class Button extends Component {
  render() {
    return (
      <React.Fragment>
        <a className="button" onClick={this.props.handleClick}>
          {this.props.nome}
        </a>
      </React.Fragment>
    );
  }
}

export default Button;
