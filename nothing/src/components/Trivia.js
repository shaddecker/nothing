import React, {Component} from 'react';
import './Component.css';
import axios from "axios";

class Trivia extends Component  {
  constructor (){
    super()
    this.state = {
      triviaQuestion: "",
      triviaAnswer: "",
      trivaCategory: "",
    }
  }

  showAnswer = () => {
    let elementAnswer = document.querySelector(".contentHidden");
    elementAnswer.style.display = "block";
  }

  hideAnswer = () => {
    let elementAnswer = document.querySelector(".contentHidden");
    elementAnswer.style.display = "none";
  }

  getTriviaQuestion = async (event) => {
    event.preventDefault();
    this.hideAnswer();
    let response = await axios.get("https://jservice.io/api/random");
    this.setState({triviaQuestion: response.data[0].question});
    this.setState({triviaAnswer: response.data[0].answer});
    this.setState({triviaCategory: response.data[0].category.title});
    this.state.timer = setInterval(this.updateCountdown,2000);
  }

  render(){
  return (
    <div className="container">
      <form onSubmit={this.getTriviaQuestion}>    
      <div><button className="button">Next Trivia Question?</button></div>
      </form>
      <div className="contentTitle">Category: {this.state.triviaCategory}</div>
      <div className="content">Question: {this.state.triviaQuestion}</div>
      <div><button onClick={this.showAnswer} className="button">Show Answer?</button></div>
      <div className="contentHidden">Answer: {this.state.triviaAnswer}</div>
    </div>
  )
  }
}

export default Trivia;
