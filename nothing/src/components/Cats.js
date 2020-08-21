import React, {Component} from 'react'
import axios from 'axios'

class Cats extends Component {
    constructor(){
        super()
        this.state={
            API:"https://api.adviceslip.com/advice",
            item:"",
        }
    }
getRandomCat = async(event) =>{
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
        <button onClick={this.getRandomCat} >GetRandomAdvice</button>
        <div>{this.state.item}</div>
    </div>
  )
  }
}

export default Cats;

