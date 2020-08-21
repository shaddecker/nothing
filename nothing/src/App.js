import React, {Component} from 'react';
import './App.css';
import axios from "axios";
import Header from "./components/Header";
import Chuck from "./components/Chuck";
import Cats from "./components/Cats"


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
      <Cats />
      <Chuck chuckJoke = {this.state.chuckAPI} />
    </div>
  )
  }
}

export default App;
