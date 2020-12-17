import React, { Component } from 'react';
import "./App.css"

class Display extends Component {
  render() {
    return (
      <div>
        <div id="operator">
    <h1>{this.props.operator}</h1>
  </div>
  <div id="display" className="display">
    {this.props.display}
    </div>
      </div>
    )
  }
}

export default Display
