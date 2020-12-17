import React, { Component } from 'react';
import "./Buttons.css";

class Buttons extends Component {
render() {
return(

<div className="buttons">
  <button  onClick={this.props.numClick} id="clear">AC</button>
  <button>+/-</button>
  <button>%</button>
  <button id="divide" value="/"  onClick={this.props.operatorClick}>/</button>
  <button id="seven" onClick={this.props.numClick}>7</button>
  <button id="eight" onClick={this.props.numClick}>8</button>
  <button id="nine" onClick={this.props.numClick}>9</button>
  <button id="multiply" value="*"   onClick={this.props.operatorClick}>*</button>
  <button id="four" onClick={this.props.numClick}>4</button>
  <button id="five" onClick={this.props.numClick}>5</button>
  <button id="six" onClick={this.props.numClick}>6</button>
  <button id="subtract" value="-"   onClick={this.props.operatorClick}>-</button>
  <button id="one" onClick={this.props.numClick}>1</button>
  <button id="two" onClick={this.props.numClick}>2</button>
  <button id="three" onClick={this.props.numClick}>3</button>
  <button id="add" value="+" onClick={this.props.operatorClick}>+</button>
  <button id="zero" onClick={this.props.numClick}>0</button>
  <button id="decimal" onClick={this.props.decimal}>.</button>
  <button>SCI</button>
  <button id="equals"  onClick={this.props.numClick}>=</button>
</div>
)}
}

export default Buttons
