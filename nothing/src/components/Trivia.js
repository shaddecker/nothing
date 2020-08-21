import React, {Component} from 'react';
import './Component.css';
import axios from "axios";

class Trivia extends Component  {
  constructor (){
    super()
    this.state = {
      triviaAPI: {},
    }
  }

  getYodaSpeak = async (event) => {
    event.preventDefault();
    let url = "https://api.funtranslations.com/translate/yoda.json"
    let text = `${url}?text=${event.target.searchtext.value}`
    let response = await axios.get({text});
    this.setState({yodaAPI: response.data});
    console.log(this.state.yodaAPI)
  }

  render(){
  return (
    <div className="container">
      <form onSubmit={this.getYodaSpeak}>    
      <div><input type="text" id="searchtext" className="input" placeholder="enter your text here"/></div>  
      <div><button className="button">What would Yoda say?</button></div>
      </form>
      <div className="content">test</div>
    </div>
  )
  }
}

export default Trivia;
