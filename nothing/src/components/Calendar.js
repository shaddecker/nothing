import React, {Component} from 'react';
import './Component.css';
import axios from "axios";

class Calendar extends Component  {
  constructor (){
    super()
    this.state = {
      calendarAPI: [],
      apiKey: "&api_key=2e956a4681bc41f0cee93a075c4c832820ea3066",
      year: "2020",
      month: "August",
      day: "25",
    }
  }

  getCalendar= async () => {
    let response = await axios.get(`https://calendarific.com/api/v2/holidays?country=us&year=${this.state.year}${this.state.apiKey}`);
    this.setState({calendarAPI: response.data.response.holidays});
    // console.log(response)
  }

  render(){
    this.getCalendar();
    let days = this.state.calendarAPI.map(item => {
      return (<div className="calendarContent">{item.date.datetime.month} {item.date.datetime.day} - {item.name}</div>)
    });
  return (
    <div className="calendarContainer">
      <div className="contentTitle">List of US Holidays for - {this.state.year}</div>      
      <div>{days}</div>
      
    </div>
  )
  }
}

export default Calendar;
