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
      <div><img src={this.state.chuckAPI.icon_url} alt="" /></div>
      <div>{this.state.chuckAPI.value}</div>
    </div>
  )
  }
}

export default Chuck;
