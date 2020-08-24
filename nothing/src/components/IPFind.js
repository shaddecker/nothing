import react, {component} from 'react'
const publicIp = require('public-ip')

class IPFind extends component {
    constructor(){
    super()
    this.state={
        api_key: b5b55334d91c20c222ff51ed1e8f0732,
        api_base_url: "http://api.ipstack.com/"
    }
    }

    getIP = async (e) => {
        e.preventdefault
        let ip4= await publicIp.v4
        console.log(ip4)
        let ip6 = await publicIp.v6
        console.log(ip6)
    }

    render(){
        return(
            <div>
                <button onclick={this.getIP}>get IP</button>

            </div>
        )
    }
}

export default IPFind;