import React, {Component} from 'react';
import './Component.css';

const Chuck = (props) => {
  return (
    <div className="container">
      <div><img src={props.chuckJoke.icon_url} alt="" /></div>
      <div>{props.chuckJoke.value}</div>
    </div>
  )
}

export default Chuck;
