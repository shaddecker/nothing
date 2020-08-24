import React, {Component} from 'react'
import axios from 'axios'
import Checkbox from "./Checkbox"

const Type=["Programming","Miscellaneous","Dark","Pun"];
const BlackList=["nsfw","religious","political","racist","sexist"];

class Jokes extends Component {
    constructor(){
        super()
        this.state={
            API:"https://sv443.net/jokeapi/v2/joke/",
            item:"",
            jokeTypes: "",
            typeCheckboxes: Type.reduce((types, type) => ({...types, [type]: false}),{}),
            blacklistCheckboxes: BlackList.reduce((filters, filter) => ({...filters, [filter]: false}),{}),
        }
    }



getRandomJoke = async(event) =>{
    event.preventDefault();
    console.log(this.state.typeCheckboxes)
    let typeslist ="";
    Object.keys(this.state.typeCheckboxes)
      .filter(checkbox => this.state.typeCheckboxes[checkbox])
      .forEach(checkbox=> {
        console.log(typeslist, this.state.jokeTypes)
          typeslist = typeslist + checkbox + ",";
          console.log("typeslist:", typeslist)
      })
      typeslist=typeslist.substring(0,typeslist.length -1);
      console.log(typeslist)

      let filter ="";
    Object.keys(this.state.blacklistCheckboxes)
      .filter(checkbox => this.state.blacklistCheckboxes[checkbox])
      .forEach(checkbox=> {
        console.log(filter)
          filter = filter + checkbox + ",";
          console.log("filter:", filter)
      })
      filter=filter.substring(0,filter.length -1);
      console.log(filter)
      if (filter === "") {}
      else { filter = "?blacklistFlags=" + filter }
      console.log(this.state.API +  typeslist +  filter)

    let response = await axios.get((this.state.API + typeslist), {

    })
    console.log(response.data)
    if (response.data.type=="twopart"){
    this.setState({
        item:response.data.setup + "  ..." + response.data.delivery
     })
}
else {
    this.setState({
        item:response.data.joke
    })
}
}

handleTypeCheckboxChange = (event) => {
    const {name} = event.target;
    console.log(name)

    this.setState(prevState => ({
        typeCheckboxes: {
            ...prevState.typeCheckboxes,
            [name]: !prevState.typeCheckboxes[name]
        }
    }))
}

handleFilterCheckboxChange = (event) => {
    const {name} = event.target;
    console.log(name)

    this.setState(prevState => ({
        blacklistCheckboxes: {
            ...prevState.blacklistCheckboxes,
            [name]: !prevState.blacklistCheckboxes[name]
        }
    }))
}

createFilterCheckbox = filter => (
    <Checkbox
        label={filter}
        isSelected={this.state.blacklistCheckboxes[filter]}
        onChange={this.handleFilterCheckboxChange}
        key={filter}
    />
)

createTypeCheckbox = type => (
    <Checkbox
        label={type}
        isSelected={this.state.typeCheckboxes[type]}
        onChange={this.handleTypeCheckboxChange}
        key={type}
    />
)

createTypeCheckboxes = () => Type.map(this.createTypeCheckbox);

createFilterCheckboxes = () => BlackList.map(this.createFilterCheckbox)

render(){
  return (
    <div className="container">
        <h3>Types of Jokes - choose 1 or many</h3>
        {this.createTypeCheckboxes()}
        <h3>Joke Filters - check any you would like to filter out</h3> 
        {this.createFilterCheckboxes()}
        <br />
        <form onSubmit={this.getRandomJoke}>
        <button className="button" >Get Random Joke</button>

        <div className="content">{this.state.item}</div>
        </form>
    </div>
  )
  }
}

export default Jokes;