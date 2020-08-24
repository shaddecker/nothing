import React, {Component} from 'react'
import axios from 'axios'

class Advice extends Component {
    constructor(){
        super()
        this.state={
            API:"https://api.adviceslip.com/advice",
            item:"",
        }
    }
getRandomAdvice = async(event) =>{
    event.preventDefault();
    let response = await axios.get(this.state.API, {

    })
    console.log(response)
    this.setState({
        item:response.data.slip.advice
    })
}

render(){
  return (
    <div className="container">
        <button className="button" onClick={this.getRandomAdvice} >Get Random Advice</button>
        <div className="content">{this.state.item}</div>
    </div>
  )
  }
}

export default Advice;

