import React, { Component } from 'react';
import "./App.css"

class Display extends Component {
  constructor(props){
    super(props);
  }
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
