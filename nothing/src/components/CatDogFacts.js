import React, {Component} from 'react';
import './Component.css';
import axios from "axios";

class CatDogFact extends Component  {
  constructor (){
    super()
    this.state = {
      factAPI: {},
      selection: "",
    }
  }

  changeSelection = (event) => {
    let theSelectedOption = document.querySelector(".select");
    this.setState({selection: theSelectedOption.options[theSelectedOption.selectedIndex].value});
  } 

  getRandomFact = async (event) => {
    event.preventDefault();
    let response = await axios.get(`https://cat-fact.herokuapp.com/facts/random?animal_type=${this.state.selection}&amount=1`);
    this.setState({factAPI: response.data});  
  }


  render(){
  return (
    <div className="container">
      <form onSubmit={this.getRandomFact}> 
      <div><img src="/images/catdog.jpg" alt="" width="300px"/></div>  
        <div>
            <select className="select" onChange={this.changeSelection}>
                <option value="cat">Cat</option>
                <option value="dog">Dog</option>    
            </select>  
        </div> 
        <div><button className="button">Get a Random Fact</button></div>
      </form>
      <div className="content">{this.state.factAPI.text}</div>
    </div>
  )
  }
}

export default CatDogFact;
