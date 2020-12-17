import React, { Component } from "react";
import Buttons from "./Buttons"
import Display from "./display"
import './App.css';

class App extends Component{
  constructor(){
    super();
this.state ={
  display: 0,
  operator: ""
}
this.handleNumClick = this.handleNumClick.bind(this);
this.handleOperator = this.handleOperator.bind(this);
this.handleDecimal = this.handleDecimal.bind(this);
  }

  handleNumClick(button){
    button = button.target.innerHTML;
    if (button === "=")this.handleResult();
    else if(this.state.operator == "0") this.setState({
      operator: button
    })
    else if(button === "AC") this.handleClear();
    else{
this.setState({operator: this.state.operator + button})
    }
  };
  handleDecimal(e){
    if(this.state.operator ===""){
      this.setState({
        operator:""
      })}
  else if (!this.state.operator.includes("."))
  this.setState({operator: this.state.operator + e.target.innerHTML}) 
      }
  handleOperator(e){
    let operators = ["+", "-", "*", "/"];
    if(this.state.operator == "") this.setState({operator: this.state.display + e.target.value});
    else if(operators.indexOf(this.state.operator[this.state.operator.length-1]) <0)
this.setState({
operator: this.state.operator + e.target.value
})
else { var regex =  /-$|\+$|\/$|\*$/;
  this.setState({operator: this.state.operator.replace(regex, e.target.value)});
}
  }
  handleResult(){
this.setState({display: eval(this.state.operator), operator: ""});
}
handleClear(){
  this.setState({
    display: 0,
    operator: ""
  })
}

  render(){
  return(
    <div class="calc-app">
      <Display 
      display={this.state.display}
      operator={this.state.operator}
      />
   <Buttons 
   numClick={this.handleNumClick}
   operatorClick={this.handleOperator}
   result = {this.handleResult}
   decimal = {this.handleDecimal}
   />
  </div>
  )
  }
  };

export default App;
