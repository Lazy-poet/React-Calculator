import React, { Component } from 'react';
import "./Buttons.css";

class Buttons extends Component {
  constructor(props){
    super(props);
     this.state={
    display: 0,
    operatorStr: 0
    };
      this.handleNumClick=this.handleNumClick.bind(this);
        this.handleClear = this.handleClear.bind(this);
      this.handleResult = this.handleResult.bind(this);
      this.handleDecimal = this.handleDecimal.bind(this);
      this.handleOperator = this.handleOperator.bind(this);
  };     
      
   //Handle button click and display:
     handleNumClick = (e) =>{
     let buttonPress= e.target.innerHTML;
      let currDisplay= this.state.display;
       let operatorStr= this.state.operatorStr;

      if(currDisplay === 0 && buttonPress !== 0){
    this.setState({display: buttonPress, operatorStr: buttonPress})
      }
     else if((buttonPress >=0 && buttonPress<= 9))
     {this.setState({display:currDisplay + buttonPress, operatorStr: currDisplay + buttonPress})
     }
       else if(buttonPress === "*" || buttonPress=== "/" ||buttonPress==="+" || buttonPress==="-"){
     this.setState({operatorStr: currDisplay+ buttonPress})
    }
       else if(buttonPress==="="){
         this.handleResult()}
      
      console.log(operatorStr);
     }; 
     handleResult(){
        this.setState({display: eval(this.state.display)})
      };
    handleClear(){
    this.setState({
    display: 0, operatorStr: 0})
    };
    handleDecimal=()=>{
      if(!this.state.display.includes(".")){
      this.setState({display: this.state.display + "." 
      })
    }
    else{
      this.setState({
        display: this.state.display
      })
    }
    }
    handleOperator=(e)=>{
      let operator = e.target.value;
      if(!this.state.display.includes(operator)){

      this.setState({
        display: this.state.display + operator
      })
    }
    // else if(this.handleResult()){

    // }
    // else{
    //   this.setstate({display: this.state.display})
    // }
    }
     
     
     

render() {
return(
<div className="calc-app">
  <div id="display" className="display">{this.state.display}</div>
<div className="buttons">
  <button  onClick={this.handleClear} id="clear">AC</button>
  <button>+/-</button>
  <button>%</button>
  <button id="divide" value="/"  onClick={this.handleOperator}>/</button>
  <button id="seven" onClick={this.handleNumClick}>7</button>
  <button id="eight" onClick={this.handleNumClick}>8</button>
  <button id="nine" onClick={this.handleNumClick}>9</button>
  <button id="multiply" value="*"   onClick={this.handleOperator}>*</button>
  <button id="four" onClick={this.handleNumClick}>4</button>
  <button id="five" onClick={this.handleNumClick}>5</button>
  <button id="six" onClick={this.handleNumClick}>6</button>
  <button id="subtract" value="-"   onClick={this.handleOperator}>-</button>
  <button id="one" onClick={this.handleNumClick}>1</button>
  <button id="two" onClick={this.handleNumClick}>2</button>
  <button id="three" onClick={this.handleNumClick}>3</button>
  <button id="add" value="+" onClick={this.handleOperator}>+</button>
  <button id="zero">0</button>
  <button id="decimal" onClick={this.handleDecimal}>.</button>
  <button>SCI</button>
  <button id="equals"  onClick={this.handleResult}>=</button>
</div>
</div>
)}
}

export default Buttons
