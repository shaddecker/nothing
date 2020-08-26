import React, {useState} from 'react';
import './Component.css';
import axios from "axios";

function Chuck () {
    const [chuckAPI, setChuckAPI] = useState("")
    

  const getChuckJoke = async () => {
    let response = await axios.get("https://api.chucknorris.io/jokes/random");
    setChuckAPI(response.data.value)
    console.log(chuckAPI)
  }

  
  return (
    <div className="container">
      <div><img src="/images/chuck-norris.jpg" alt="" width="300px"/></div>
      <div className="content">{chuckAPI}</div>
      <div><button className="button" onClick={getChuckJoke}>Get Random Chuck Norris Joke</button></div>
    </div>
  )
  
}

export default Chuck;
