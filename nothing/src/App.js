import React, {Component} from 'react';
import './App.css';
import Header from "./components/Header";
import Chuck from "./components/Chuck";
import Advice from "./components/Advice"


class App extends Component{
  constructor (){
    super()
    this.state = ""
  }

  render(){
  return (
    <div>
      <Header />
      <Advice />
      <Chuck />
    </div>
  )
  }
}

export default App;
