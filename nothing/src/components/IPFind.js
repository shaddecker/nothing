import React, {Component} from 'react'
import axios from 'axios';
import MapComponent from './MapComponent'

const publicIp = require('public-ip');

class IPFind extends Component {
    constructor(){
    super()
    this.state={
        api_key: "?access_key=b5b55334d91c20c222ff51ed1e8f0732",
        api_base_url: "http://api.ipstack.com/",
        ip4:"",
        ipInfo:[],
        flag : "",
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
        console.log(this.state.api_base_url + this.state.ip4 + this.state.api_key)
        let response = await axios.get((this.state.api_base_url + this.state.ip4 + this.state.api_key), {

    })
    console.log(response.data.location.country_flag_emoji);
    this.setState({
        ipInfo: response.data,
        flag: response.data.location.country_flag_emoji,
    })
}

    render(){
        return(
            <div>
                <h1>Find your IP address and physical address</h1>
                <h3>Step 1:</h3>
                <form onSubmit={this.getIP}>

        <button className="button" >Get IP address</button>
        <textarea value={this.state.ip4} disabled/>
            
        </form>

        <h3>Step 2:</h3>

        <form onSubmit={this.getInfo}>
        <button className="button" >Find IP info </button>
            <br />
            City
        <textarea value={this.state.ipInfo.city} disabled/>
        State
        <textarea value={this.state.ipInfo.region_name} disabled/>
        Zip
        <textarea value={this.state.ipInfo.zip} disabled/>
        Country
        <textarea value={this.state.ipInfo.country_name} disabled/>
        
        <span role="img" aria-label="flag">{this.state.flag}</span>
        
        </form>
        <MapComponent
    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"
    loadingElement={<div style={{ height: `100%` }} />}
    containerElement={<div style={{ height: `400px` }} />}
    mapElement={<div style={{ height: `100%` }} />}
    />

            </div>
        )
    }
}

export default IPFind;