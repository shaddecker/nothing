import React, {Component} from 'react'
import axios from 'axios';
const publicIp = require('public-ip');

class IPFind extends Component {
    constructor(){
    super()
    this.state={
        api_key: "?access_key=b5b55334d91c20c222ff51ed1e8f0732",
        api_base_url: "http://api.ipstack.com/",
        ip4:"",
        ipInfo:[]
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
    console.log(response.data);
    this.setState({
        ipInfo: response.data,
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
        <textarea value={this.state.ipInfo} disabled/>
            
        </form>

            </div>
        )
    }
}

export default IPFind;