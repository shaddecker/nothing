import React, {Component} from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import Header from "./components/Header";
import Chuck from "./components/Chuck";
import Advice from "./components/Advice";
import Jokes from "./components/Jokes";
import Footer from "./components/Footer";
import Trivia from "./components/Trivia";

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
<<<<<<< HEAD
          <Route path="/trivia" render={()=> <Trivia />} />
=======
          <Route path="/jokes" render={()=> <Jokes />} />
>>>>>>> 4418e8a0faaca2a57720e1eb084ff5ff76108d54
      </Switch>
      </main>
      <Footer />
    </div>
  )
  }
}

export default App;
