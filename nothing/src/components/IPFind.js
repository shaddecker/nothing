import React, {Component} from 'react'
import axios from 'axios';
import MapComponent from './MapComponent'

const publicIp = require('public-ip'); 
// npm install public-ip

class IPFind extends Component {
    constructor(){
    super()
    this.state={
        api_key: "?access_key=b5b55334d91c20c222ff51ed1e8f0732",
        api_base_url: "http://api.ipstack.com/",
        ip4:"",
        ipInfo:[],
        flag : "",
        latitude: "",
        longitude: "",
    }
    }

    getIP = async (e) => {
        e.preventDefault();
        let ip4= await publicIp.v4()
        // console.log(ip4)
        this.setState({
            ip4: ip4,
        })
    }

    getInfo = async (e) =>{
        e.preventDefault();
        // console.log(this.state.api_base_url + this.state.ip4 + this.state.api_key)
        let response = await axios.get((this.state.api_base_url + this.state.ip4 + this.state.api_key), {

    })
    // console.log(response.data.location.country_flag_emoji);
    this.setState({
        ipInfo: response.data,
        flag: response.data.location.country_flag_emoji,
        latitude: response.data.latitude,
        longitude: response.data.longitude,
    })
}

    render(){
        return(
            <div>
                <h1>Find your IP address and physical address</h1>
                <h3>Step 1:</h3>
                <form onSubmit={this.getIP}>

        <button className="button" >Get IP address</button>
        <div>{this.state.ip4}</div>
            
        </form>

        <h3>Step 2:</h3>

        <form onSubmit={this.getInfo}>
        <button className="button" >Find IP info </button>
            <br />
            
        <div>City: {this.state.ipInfo.city}</div> 
        <div>State: {this.state.ipInfo.region_name}</div> 
        <div>Zip: {this.state.ipInfo.zip}</div> 
        <div>Country: {this.state.ipInfo.country_name}</div>
        
        <span role="img" aria-label="flag">{this.state.flag}</span>
        
        </form>

        <h3>Step 3:</h3>

        <MapComponent latitude={this.state.latitude} longitude={this.state.longitude}  />

            </div>
        )
    }
}

export default IPFind;