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


    
    render(){
        return(
            <div>

            </div>
        )
    }
}

export default IPFind;