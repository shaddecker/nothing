import React, {Component} from 'react'
import axios from 'axios'

class Jokes extends Component {
    constructor(){
        super()
        this.state={
            API:"https://sv443.net/jokeapi/v2/joke/Programming",
            item:"",
            type:["Programming","Miscellaneous","Dark","Pun"],
            blacklist:["nsfw","religious","political","racist","sexist"],
        }
    }
getRandomJoke = async(event) =>{
    event.preventDefault();
    let response = await axios.get(this.state.API, {

    })
    console.log(response.data.joke)
    this.setState({
        item:response.data.joke
    })
}

render(){
  return (
    <div className="container">
        <button className="button" onClick={this.getRandomJoke} >GetRandomJoke</button>

        <div className="content">{this.state.item}</div>
    </div>
  )
  }
}

export default Jokes;