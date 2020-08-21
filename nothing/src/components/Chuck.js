import React, {Component} from 'react';
import './Component.css';
import axios from "axios";

class Chuck extends Component  {
  constructor (){
    super()
    this.state = {
      chuckAPI: {},
    }
  }

  getChuckJoke = async () => {
    let response = await axios.get("https://api.chucknorris.io/jokes/random");
    this.setState({chuckAPI: response.data});
    console.log(this.state.chuckAPI)
  }

  render(){
  return (
    <div className="container">
      <div><img src="/images/chuck-norris.jpg" alt="" width="300px"/></div>
      <div className="content">{this.state.chuckAPI.value}</div>
      <div><button className="button" onClick={this.getChuckJoke}>Get Random Chuck Norris Joke</button></div>
    </div>
  )
  }
}

export default Chuck;
