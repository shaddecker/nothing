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
      timer: 10,
      themeSong: {},
      buzzer: {},
      running: false,
    }

    
  }

  showAnswer = () => {
    let elementAnswer = document.querySelector(".contentHidden");
    elementAnswer.style.display = "block";
    let elementCountDown = document.querySelector(".countDown");
    elementCountDown.style.display = "none";
    this.state.themeSong.pause();
    this.state.buzzer.play();
    this.setState({running: false});
  }

  hideAnswer = () => {
    let elementAnswer = document.querySelector(".contentHidden");
    elementAnswer.style.display = "none";
    let elementCountDown = document.querySelector(".countDown");
    elementCountDown.style.display = "block";
  }

  updateCounter = async () => {
    let tmpTimer;
    switch(true){
      case this.state.timer > 0:
        break;
      case this.state.timer === 0:
        this.showAnswer();
        break;
      case this.state.timer < 0:
        this.state.buzzer.pause();
        clearInterval(this.interval);
        break;
      default:        
    }
    tmpTimer = this.state.timer - 1;
    this.setState({timer: tmpTimer});
  }

  getTriviaQuestion = async (event) => {
    event.preventDefault();
    this.hideAnswer();
    this.setState({timer: 10});
    let response = await axios.get("https://jservice.io/api/random");
    this.setState({triviaQuestion: response.data[0].question});
    this.setState({triviaAnswer: response.data[0].answer});
    this.setState({triviaCategory: response.data[0].category.title});
    this.interval = setInterval(this.updateCounter,1000);
    this.setState({themeSong: document.getElementById("theme")});
    this.setState({buzzer: document.getElementById("buzzer")});
    this.state.themeSong.play();
    this.setState({running: true});
  }

  render(){
  return (
    <div className="container">
      <audio id="theme" loop>
        <source src="/sounds/theme.mp3" type="audio/mpeg"/>
      </audio>
      <audio id="buzzer">
        <source src="/sounds/buzzer.mp3" type="audio/mpeg"/>
      </audio>
      <div><img src="/images/trivia2.png" alt="" width="300px"/></div>
      <form onSubmit={this.getTriviaQuestion}>    
      <div>{(!this.state.running) ? <button className="button">Next Trivia Question</button>: null}</div>
      </form>
      <div className="countDown">Time Remaining: {this.state.timer}</div>
      <div className="contentTitle">Category: {this.state.triviaCategory}</div>
      <div className="content">Question: {this.state.triviaQuestion}</div>
      <div className="contentHidden">Answer: {this.state.triviaAnswer}</div>
      
      </div>
  )
  }
}

export default Trivia;
