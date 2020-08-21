import React, {Component} from 'react'
import axios from 'axios'
import Checkbox from "./Checkbox"

const Type=["Programming","Miscellaneous","Dark","Pun"];
const BlackList=["nsfw","religious","political","racist","sexist"];

class Jokes extends Component {
    constructor(){
        super()
        this.state={
            API:"https://sv443.net/jokeapi/v2/joke/Programming",
            item:"",
            typeCheckboxes: Type.reduce((types, type) => ({...types, [type]: false}),{}),
            blacklistCheckboxes: BlackList.reduce((filters, filter) => ({...filters, [filter]: false}),{}),
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

handleTypeCheckboxChange = (event) => {
    const {name} = event.target;

    this.setState(prevState => ({
        typeCheckboxes: {
            ...prevState.typeCheckboxes,
            [name]: !prevState.typeCheckboxes[name]
        }
    }))
}

handleFilterCheckboxChange = (event) => {
    const {name} = event.target;

    this.setState(prevState => ({
        blacklistCheckboxes: {
            ...prevState.filterCheckboxes,
            [name]: !prevState.filterCheckboxes[name]
        }
    }))
}

createFilterCheckbox = filter => (
    <Checkbox
        label={filter}
        isSelected={this.state.blacklistCheckboxes[filter]}
        onCheckboxChange={this.handleFilterCheckboxChange}
        key={filter}
    />
)

createTypeCheckbox = type => (
    <Checkbox
        label={type}
        isSelected={this.state.typeCheckboxes[type]}
        onCheckboxChange={this.handleTypeCheckboxChange}
        key={type}
    />
)

createTypeCheckboxes = () => Type.map(this.createTypeCheckbox);

createFilterCheckboxes = () => BlackList.map(this.createFilterCheckbox)

render(){
  return (
    <div className="container">
        <h3>Types of Jokes </h3>
        {this.createTypeCheckboxes()}
        <h3>Joke Filters</h3> 
        {this.createFilterCheckboxes()}
        <br />
        <form onSubmit={this.getRandomJoke}>
        <button className="button" >GetRandomJoke</button>

        <div className="content">{this.state.item}</div>
        </form>
    </div>
  )
  }
}

export default Jokes;