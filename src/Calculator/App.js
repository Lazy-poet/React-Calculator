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
this.handlePercent = this.handlePercent.bind(this);
this.handlePlusMinus = this.handlePlusMinus.bind(this);

  }

  handleNumClick(button){
    if (this.state.operator.length > 8)this.setState({operator: this.state.operator});
    button = button.target.innerHTML;
    if (button === "=")this.handleResult();
    else if(button === "AC") this.handleClear();
    else if(this.state.operator === "0") this.setState({
      operator: button
    });
    
    else if(button==="C") this.handleDelete();
    else if(this.state.operator.length <= 16)
this.setState({operator: this.state.operator + button})
    
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
    if(this.state.operator === "") this.setState({operator: this.state.display + e.target.value});
    else if(operators.indexOf(this.state.operator[this.state.operator.length-1]) <0)
this.setState({
operator: this.state.operator + e.target.value
})
else { var regex =  /-$|\+$|\/$|\*$/;
  this.setState({operator: this.state.operator.replace(regex, e.target.value)});
}
  }
  handleResult(){
    if(eval(this.state.operator.length<=12))
this.setState({display: eval(this.state.operator), operator: ""});
else this.setState({display: eval(this.state.operator).toExponential(), operator: ""})
}
handleClear(){
  this.setState({
    display: 0,
    operator: ""
  })
}
handlePercent(){
  this.setState({display: this.state.operator / 100, operator: ""})
}
handlePlusMinus(){
  try{if(this.state.operator ==="") this.setState({operator: ""});
  else this.setState({operator: this.state.operator * -1})}
  catch(err){this.setState({display: "error"})}
}
handleDelete(){
  this.setState({operator: this.state.operator.slice(0, this.state.operator.length-1)})
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
   percent ={this.handlePercent}
   plusMinus ={this.handlePlusMinus}
   />
  </div>
  )
  }
  };

export default App;
