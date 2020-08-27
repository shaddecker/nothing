import React, {useState, useEffect, useRef} from 'react'
import axios from 'axios'
import Checkbox from "./Checkbox"

const Type=["Programming","Miscellaneous","Dark","Pun"];
const BlackList=["nsfw","religious","political","racist","sexist"];


 function Jokes () {
    const [API, setAPI] = useState("https://sv443.net/jokeapi/v2/joke/")
    const [item, setItem] = useState('')
    const [typeCheckboxes, settypeCheckboxes] = useState(Type.reduce((types, type) => ({...types, [type]: false}),{}))
    const [blacklistCheckboxes, setblacklistCheckboxes] = useState(BlackList.reduce((filters, filter) => ({...filters, [filter]: false}),{}))
    


const getRandomJoke = async(event) =>{
    event.preventDefault();
    let typeslist ="";
    Object.keys(typeCheckboxes)
      .filter(checkbox => typeCheckboxes[checkbox])
      .forEach(checkbox=> {
          typeslist = typeslist + checkbox + ",";
      })
      typeslist=typeslist.substring(0,typeslist.length -1);

      let filter ="";
    Object.keys(blacklistCheckboxes)
      .filter(checkbox => blacklistCheckboxes[checkbox])
      .forEach(checkbox=> {
          filter = filter + checkbox + ",";
      })
      filter=filter.substring(0,filter.length -1);
      if (filter === "") {}
      else { filter = "?blacklistFlags=" + filter }

    let response = await axios.get((API + typeslist), {

    })
    if (response.data.type==="twopart"){
        setItem(response.data.setup + "  ..." + response.data.delivery)
    }
    else {
        setItem(response.data.joke)
    }
}

const handleTypeCheckboxChange = (event) => {
    const {name} = event.target;
    settypeCheckboxes((prevState) => ({ ...prevState, [name]: !typeCheckboxes[name], })); 
}

const handleFilterCheckboxChange = (event) => {
    const {name} = event.target;
    setblacklistCheckboxes((prevState) =>({...prevState, [name]:!blacklistCheckboxes[name]})
        )
}

const createFilterCheckbox = filter => (
    <Checkbox
        label={filter}
        isSelected={blacklistCheckboxes[filter]}
        onChange={handleFilterCheckboxChange}
        key={filter}
    />
)

const createTypeCheckbox = type => (
    <Checkbox
        label={type}
        isSelected={typeCheckboxes[type]}
        onChange={handleTypeCheckboxChange}
        key={type}
    />
)

const createTypeCheckboxes = () => Type.map(createTypeCheckbox);

const createFilterCheckboxes = () => BlackList.map(createFilterCheckbox)

  return (
    <div className="containerJokes">
        {/* <div><img src="/images/noodledadjoke.jpg" alt="" width="300px"/></div> */}
        <div className="contentTitle">Types of Jokes - choose 1 or many</div>
        {createTypeCheckboxes()}
        <div className="contentTitle">Joke Filters - check any you would like to filter out</div> 
        {createFilterCheckboxes()}
        <br />
        <form onSubmit={getRandomJoke}>
        <button className="button" >Get Random Joke</button>

        <div className="content">{item}</div>
        </form>
    </div>
  )
  }


export default Jokes;
