import React, {Component} from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import Header from "./components/Header";
import Chuck from "./components/Chuck";
import Advice from "./components/Advice";
import Jokes from "./components/Jokes";


class App extends Component{
  constructor (){
    super()
    this.state = ""
  }

  render(){
  return (
    <div>
      <Header />
      <main>
        <Switch>
          <Route path="/advice" render={()=> <Advice />} />
          <Route path="/chuck" render={()=> <Chuck />} />
          <Route path="/jokes" render={()=> <Jokes />} />
      </Switch>
      </main>
    </div>
  )
  }
}

export default App;
