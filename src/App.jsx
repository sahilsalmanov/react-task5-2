import React from "react";
import "./App.css"


 class App extends React.Component {
  state = { 
    lastKey: null 
  };
  onKeypress = (event) => {
    this.setState({ lastKey: event.key });
  }
  componentDidMount() {
    window.addEventListener("keypress", this.onKeypress);
  }
 render() {
  const { lastKey} = this.state;
  let className = "div";

  if(lastKey == 1) {
    className += " red";
  }
  else if(lastKey == 2) {
    className += " blue";
  }
   return <main>
  <div className= {className}>  Last pressed key: {this.state.lastKey} </div></main>;
  
 }
}

export default App