import React, {Component} from 'react'
import axios from 'axios';
import MapPopup from './MapPopup'

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
        map: null,
        mapVisible: false,
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
        APIbase:`https://dev.virtualearth.net/REST/v1/Imagery/Map/Road/${this.state.latitude},${this.state.longitude}/14?mapSize=500,500&pushpin=${this.state.latitude},${this.state.longitude}&key=AtmZJw-7hg6FmS-GuGXJKoKQMMXFqiyrhTurRLJfOHDIlNxcB3vDnAP4pwLToq-d`,
        // example: http://dev.virtualearth.net/REST/v1/Imagery/Map/Road/47.619048,-122.35384/15?mapSize=500,500&pp=47.620495,-122.34931;21;AA&pp=47.619385,-122.351485;;AB&pp=47.616295,-122.3556;22&mapMetadata=1&o=xml&key={BingMapsAPIKey}
        APIkey:"AtmZJw-7hg6FmS-GuGXJKoKQMMXFqiyrhTurRLJfOHDIlNxcB3vDnAP4pwLToq-d",
        map: null,
        mapShown: false,
    })
    let mapResponse = await axios.get((`https://dev.virtualearth.net/REST/v1/Imagery/Map/Road/${this.state.latitude},${this.state.longitude}/14?mapSize=500,500&pushpin=${this.state.latitude},${this.state.longitude}&key=AtmZJw-7hg6FmS-GuGXJKoKQMMXFqiyrhTurRLJfOHDIlNxcB3vDnAP4pwLToq-d`), {
        responseType: 'arraybuffer' })
        const b64Data = btoa(new Uint8Array(mapResponse.data).reduce((dataArray, byte) => {
            return dataArray + String.fromCharCode(byte);
        }, '')
        );
        const mapData = { key: "map", value: `data:image/jpg;base64,${b64Data}`}
        this.setState({ map: mapData.value, mapVisible: true })
}

    render(){
        return(
        <div className="container">
            <div className="contentTitle">Find your IP address and physical address</div>
            <div className="contentTitle">Step 1:</div>
            <form onSubmit={this.getIP}>
                <button className="button" >Get IP address</button>
                <div className="contentSmall">{this.state.ip4}</div>
            </form>
            <div className="contentTitle">Step 2:</div>
            <form onSubmit={this.getInfo}>
            <button className="button" >Find IP info </button><br />
            <div className="contentSmall">City: {this.state.ipInfo.city}</div> 
            <div className="contentSmall">State: {this.state.ipInfo.region_name}</div> 
            <div className="contentSmall">Zip: {this.state.ipInfo.zip}</div> 
            <div className="contentSmall">Country: {this.state.ipInfo.country_name}</div>
            <span role="img" aria-label="flag">{this.state.flag}</span>
            </form>
            <div className="contentTitle">Step 3:</div>            
            <MapPopup mapData = {this.state.map} mapVisible = {this.state.mapVisible}/>             
          </div>
        )
    }
}


export default IPFind;