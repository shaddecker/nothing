import React, {Component} from 'react';
import './App.css';
import axios from "axios";
import Header from "./components/Header";
import Chuck from "./components/Chuck";

class App extends Component{
  constructor (){
    super()
    this.state = {
      chuckAPI: {},
    }
  }

  componentDidMount = async () => {
    let response = await axios.get("https://api.chucknorris.io/jokes/random");
    this.setState({chuckAPI: response.data});
    console.log(this.state.chuckAPI)
  }

  render(){
  return (
    <div>
      <Header />
      <Chuck chuckJoke = {this.state.chuckAPI} />
    </div>
  )
  }
}

export default App;
