import React, {Component} from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import Header from "./components/Header";
import Chuck from "./components/Chuck";
import Advice from "./components/Advice";
import Jokes from "./components/Jokes";
import Footer from "./components/Footer";
import Trivia from "./components/Trivia";
import Home from "./components/Home";
import IPFind from "./components/IPFind";
import CatDogFacts from "./components/CatDogFacts";
import Calendar from "./components/Calendar";

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
          <Route path="/trivia" render={()=> <Trivia />} />
          <Route path="/jokes" render={()=> <Jokes />} />
          <Route path="/ipfind" render={()=> <IPFind />} />
          <Route path="/CatDogFacts" render={()=> <CatDogFacts />} />
          <Route path="/calendar" render={()=> <Calendar />} />
          <Route path="/" render={()=> <Home />} />
          
      </Switch>
      </main>
      <Footer />
    </div>
  )
  }
}

export default App;
