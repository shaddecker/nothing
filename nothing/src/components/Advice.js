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
    <div>
        <button onClick={this.getRandomAdvice} >GetRandomAdvice</button>
        <div>{this.state.item}</div>
    </div>
  )
  }
}

export default Advice;

