import React, {useState} from 'react'
import axios from 'axios'

function Advice () {
    const [API, setAPI] = useState("https://api.adviceslip.com/advice")
    const [item, setItem] = useState("")

        
const getRandomAdvice = async(event) =>{
    event.preventDefault();
    let response = await axios.get(API);
    setItem(response.data.slip.advice);
}


  return (
    <div className="containerAdvice">
        <div><img src="/images/CharlieBrownAdvice.png" alt="" width="300px"/></div>
        <button className="button" onClick={getRandomAdvice} >Get Random Advice</button>
        <div className="content">{item}</div>
    </div>
  )
  
}

export default Advice;

