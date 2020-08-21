import React, {Component} from 'react';
import './App.css';
import {Route, Link, Switch} from "react-router-dom";
import Header from "./components/Header";
import Chuck from "./components/Chuck";
import Advice from "./components/Advice"
import Footer from "./components/Footer";

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
      </Switch>
      </main>
      <Footer />
    </div>
  )
  }
}

export default App;
