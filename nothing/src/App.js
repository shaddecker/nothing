import React, {Component} from 'react';
import './App.css';
import Header from "./components/Header"
import Cats from "./components/Cats"

class App extends Component{
  constructor (){
    super()
    this.state = {
      chuckAPI: [],
    }
  }
  render(){
  return (
    <div>
      <Header />
      <Cats />
    </div>
  )
  }
}

export default App;
